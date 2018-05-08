package nl.hu.v1wac.firstapp.webservices;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/countries")
public class WorldResource {

	@GET
	@Produces("application/json")
	public String getLanden() {

		WorldService service = ServiceProvider.getWorldService();
		JsonArrayBuilder jab = Json.createArrayBuilder();

		for (Country c : service.getAllCountries()) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("countries", c.getName());
			jab.add(job);
		}

		JsonArray array = jab.build();
		return array.toString();
	}

	@GET
	@Path("{code}")
	@Produces("application/json")
	public String getLand(@PathParam("code") String code) {
		WorldService service = ServiceProvider.getWorldService();
		JsonArrayBuilder jab = Json.createArrayBuilder();
		
		for (Country c : service.getAllCountries()) {
			if(c.getCode().equals(code)) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("Land", c.getName());
			job.add("code", c.getCode());
			job.add("captial", c.getCapital());
			job.add("Goverment", c.getGovernment());

			jab.add(job);
			}
		}
		
		JsonArray array = jab.build();
		return array.toString();
	}
	
	@GET
	@Path("largestsurfaces")
	@Produces("application/json")
	public String getSurface() {
		WorldService service = ServiceProvider.getWorldService();
		JsonArrayBuilder jab = Json.createArrayBuilder();
		
		for (Country c : service.get10LargestSurfaces()) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("countries: ", c.getName());
			job.add("oppverlakte:", c.getSurface());
			jab.add(job);
			
		}

		JsonArray array = jab.build();
		return array.toString();
		
	}
	
	@GET
	@Path("largestpopulation")
	@Produces("application/json")
	public String getPopulation() {
		WorldService service = ServiceProvider.getWorldService();
		JsonArrayBuilder jab = Json.createArrayBuilder();
		
		for (Country c : service.get10LargestSurfaces()) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("countries: ", c.getName());
			job.add("populatie:", c.getPopulation());
			jab.add(job);
			
		}

		JsonArray array = jab.build();
		return array.toString();
		
	}

}
