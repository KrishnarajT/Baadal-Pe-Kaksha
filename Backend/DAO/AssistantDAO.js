// import AWS from 'aws-sdk';
// import config from '../config/config.js'

// variable to hold db connection
let cluster0;

export default class AssistantDAO {
     // Method to inject the database connection
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

    //method to create new user
    static async newUser(email, name, room_address) {
        const user = {
            email,
            name,
            room_address
        };

        try {
            const result = await cluster0.collection("users").insertOne(user);
            return result;
        } catch (e) {
            console.error(`Unable to create new user: ${e}`);
            return { error: e };
        }
    }

    //method to setappointment
    static async SetAppointment({
        appointee,
        appointer,
        creation_time,
        appointment_time,
        appointment_duration,
        appointment_purpose,
        appointment_description
      }) {
        try {
          // Check if the appointment already exists
          let appointment = await cluster0
            .collection("appointments")
            .findOne({ "appointee": appointee });
    
          if (appointment) {
            console.log("The appointment already exists", appointment);
    
            // If the appointment exists and has different information, update it
            if (
              appointment.creation_time !== creation_time ||
              appointment.appointment_time !== appointment_time ||
              appointment.appointment_duration !== appointment_duration ||
              appointment.appointment_purpose !== appointment_purpose ||
              appointment.appointment_description !== appointment_description
            ) {
              let result = await cluster0
                .collection("appointments")
                .updateOne(
                  { "appointee": appointee },
                  {
                    $set: {
                      creation_time,
                      appointment_time,
                      appointment_duration,
                      appointment_purpose,
                      appointment_description
                    }
                  }
                );
    
              return result;
            }
    
            // If the appointment exists and has the same information, return it
            return appointment;
          }
    
          // If the appointment doesn't exist, create it
          let result = await cluster0
            .collection("appointments")
            .insertOne({
              appointee,
              appointer,
              creation_time,
              appointment_time,
              appointment_duration,
              appointment_purpose,
              appointment_description
            });
    
          return result;
        } catch (e) {
          console.error(`Unable to set appointment: ${e}`);
          throw e;
        }
      }
    
      
      static async getAppointment(appointmentId) {
        try {
          console.log('Attempting to retrieve appointment with ID:', appointmentId);
          const appointment = await cluster0.collection("appointments").findOne({ _id: new ObjectId(appointmentId) });
      
          if (!appointment) {
            console.log("Appointment not found");
            return { message: "Appointment not found" };
          }
          
          console.log('Appointment retrieved:', appointment);
          return appointment;
        } catch (e) {
          console.error(`Unable to get appointment: ${e}`);
          throw e;
        }
      }

      static async getAppointmentsByUser(appointeeEmail) {
        try {
          const appointments = await cluster0
            .collection("appointments")
            .find({ appointee: appointeeEmail })
            .toArray();
    
          return appointments;
        } catch (e) {
          console.error(`Unable to get appointments for user: ${e}`);
          throw e;
        }
      }
    
}
