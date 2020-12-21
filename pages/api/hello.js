import "reflect-metadata";
import {createConnection} from "typeorm";

export default (req, res) => {

	createConnection().then(connection => {
		// here you can start to work with your entities
		console.log(connection);
	}).catch(error => console.log(error));
	
	
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
