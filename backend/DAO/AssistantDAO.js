/**
 * @file AssistantDAO.js
 * @description This file contains the AssistantDAO class which is responsible for interacting with the database to perform CRUD operations related to users and appointments.
 * @module AssistantDAO
 */

/**
 * @class AssistantDAO
 * @classdesc Represents the AssistantDAO class.
 */

// import AWS from 'aws-sdk';
// import config from '../config/config.js'
import { ObjectId } from 'mongodb';

// variable to hold db connection
let cluster0;
export default class AssistantDAO {
	// Method to inject the database connection
	/**
	 * @method InjectDB
	 * @description Injects the database connection into the AssistantDAO class.
	 * @param {Object} conn - The database connection object.
	 * @returns {Promise<void>} - A promise that resolves when the database connection is injected.
	 */
	static async InjectDB(conn) {
		// If the connection is already established, return
		if (cluster0) {
			return;
		}
		try {
			// Establish a connection to the database
			cluster0 = await conn.db("Appointment-Assistant");
		} catch (e) {
			// Log any errors that occur during connection
			console.error(
				`Unable to establish a collection handle in LuxuriantDAO: ${e}`
			);
		}
	}

	/**
	 * @method newUser
	 * @description Creates a new user in the database.
	 * @param {string} email - The email of the user.
	 * @param {string} name - The name of the user.
	 * @param {string} room_address - The room address of the user.
	 * @returns {Promise<Object>} - A promise that resolves with the result of the user creation.
	 */
	//method to create new user
	static async add_new_user(user) {
		// user will be getting from 
		try {
			// check user exist before adding 
			const userExist = await this.userExist(user.email);
			if (userExist) {
				console.log("User already exist");
				return false;
			}
			// Insert the user into the 'users' collection
			await cluster0.collection("users").insertOne(user);
			return true;
		} catch (e) {
			console.error(`Unable to create new user: ${e}`);
			return { error: e };
		}
	}

	// function to check user exist in the database
	static async userExist(email) {
		try {
			const user = await cluster0.collection("users").findOne({ email: email });
			if (!user) {
				console.log("User not found");
				return false;
			}
			return true;
		}
		catch (e) {
			console.error(`Unable to check user existence: ${e}`);
			throw e;
		}
	}

	/**
	 * @method SetAppointment
	 * @description Sets an appointment in the database.
	 * @param {string} appointee - The email of the appointee.
	 * @param {string} appointer - The email of the appointer.
	 * @param {Date} creation_time - The creation time of the appointment.
	 * @param {Date} appointment_time - The time of the appointment.
	 * @param {number} appointment_duration - The duration of the appointment in minutes.
	 * @param {string} appointment_purpose - The purpose of the appointment.
	 * @param {string} appointment_description - The description of the appointment.
	 * @returns {Promise<Object>} - A promise that resolves with the created or updated appointment.
	 */
	//method to setappointment
	static async SetAppointment(appointment) {
		let result;
		try {
			// Insert the appointment into the 'appointments' collection
			result = await cluster0.collection("appointments").insertOne(appointment);
			appointment._id = result.insertedId; // Get the id of the inserted document
		} catch (e) {
			console.error(`Unable to set appointment: ${e}`);
			throw e;
		}
		return appointment; // Return the complete appointment object
	}

	

	static async areUserDetailsFilled(firebaseID) {
		try {
			const user = await cluster0.collection("users").findOne({ firebase_id: firebaseID });
			if (!user) {
				console.log("User not found");
				return { message: "User not found", status:false};
			}
			if (!user.phone_number && !user.room) {
				console.log("User details not filled");
				return {status: false};
			}
			return {userDetails: user, status: true};
		} catch (e) {
			console.error(`Unable to check user details: ${e}`);
			throw e;
		}
	
	}

	// update user details
	static async updateUserDetails(user) {
		try {
			const result = await cluster0.collection("users").updateOne(
				{ email: user.email },
				{ $set: { phone_no: user.phone_no, room_address: user.room_address } }
			);
			return result;
		}
		catch (e) {
			console.error(`Unable to update user details: ${e}`);
			throw e;
		}
	}

	static async getAppointment(appointerid) {
		try {
			if (!appointerid) {
				console.log("Invalid apointer ID");
				return { message: "Invalid apointer ID" };
			}
	
			console.log('Attempting to retrieve appointments with apointer ID:', appointerid);
	
			const appointments = await cluster0.collection("appointments").find({ appointer: appointerid }).toArray();
			console.log('Appointments retrieved:', appointments);
			if (!appointments || appointments.length === 0) {
				console.log("No appointments found for the given apointer ID");
				return { message: "No appointments found for the given apointer ID" };
			}

	
			console.log('Appointments retrieved:', appointments);
			return appointments;
		} catch (e) {
			console.error(`Unable to get appointments: ${e}`);
			throw e;
		}
	}
	static async getUsers() {
		try {
			const users = await cluster0.collection("users").find().toArray();
			return users;
		} catch (e) {
			console.error(`Unable to get users: ${e}`);
			throw e;
		}
	}
	static async getProfile(userId) {
		try {
			const user_Profile = await cluster0.collection("users").findOne({ firebase_id: userId });
			if (!user_Profile) {
				console.log("User not found");
				return { message: "User not found" };
			}
			return user_Profile;
		} catch (e) {
		  console.error(`Unable to get profile stats: ${e}`);
		  throw e;
		}
	  }
	  static async deleteAppointment(appointmentId) {
		try {
			const result = await cluster0.collection("appointments").deleteOne(
				{ _id: new ObjectId(appointmentId) }
			);
	
			console.log(`Deleted count: ${result.deletedCount}`); // Log the number of deleted documents
	
			if (result.deletedCount === 0) {
				console.log("No appointment found with the given ID");
				return { message: "No appointment found with the given ID" };
			}
	
			return { message: "Appointment deleted successfully" };
		} catch (e) {
			console.error(`Unable to delete appointment: ${e}`);
			throw e;
		}
	}
	static async changeStatus(appointmentId, status) {
		if (!ObjectId.isValid(appointmentId)) {
			console.log(`Invalid ID: ${appointmentId}`);
			return { message: "Invalid ID" };
		}
	
		try {
			const result = await cluster0.collection("appointments").updateOne(
				{ _id: new ObjectId(appointmentId) },
				{ $set: { status: status } }
			);
	
			if (result.matchedCount === 0) {
				console.log("No appointment found with the given ID");
				return { message: "No appointment found with the given ID" };
			}
	
			const updatedAppointment = await cluster0.collection("appointments").findOne({ _id: new ObjectId(appointmentId) });
	
			return { appointment: updatedAppointment };
		} catch (e) {
			console.error(`Unable to change status: ${e}`);
			throw e;
		}
	}

	// method to upload profile photo url to mongodb
	static async uploadProfilePhoto(userId, imageUri) {
		try {
			const result = await cluster0.collection("users").updateOne({firebase_id: userId}, { $set: { profile_pic_url: imageUri } });
			return result;
	}catch(err){
		console.error(`Unable to upload profile photo: ${err}`);
		throw err;
	}
}
	static async updateUserProfile(user_updated_details, firebaseID) {
		try {
			// Prepare an update object with only the fields that are not empty
			const update = {};
			for (const [key, value] of Object.entries(user_updated_details)) {
				if (value && key !== '_id') {
					update[key] = value;
				}
			}

			// Update user details in the users collection based on the firebaseID
			const result = await cluster0.collection("users").updateOne(
				{ firebase_id: firebaseID },
				{ $set: update }
			);

			if (result.matchedCount === 0) {
				console.log(`No user found with FirebaseID: ${firebaseID}`);
				return null;
			}

			console.log(`Updated user with FirebaseID: ${firebaseID}`);
			return result;
		} catch (e) {
			console.error(`Unable to update user profile: ${e}`);
			throw e;
		}
	}
}
