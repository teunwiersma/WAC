package nl.hu.v1wac.firstapp.persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import nl.hu.v1wac.firstapp.model.Country;

public class CountryPostgresDaoImpl extends PostgresBaseDao implements CountryDao {

	private ArrayList<Country> Landen = new ArrayList<Country>();

	private List<Country> selectCountry(String query) {
		List<Country> results = new ArrayList<Country>();
		try (Connection con = super.getConnection()) {
			PreparedStatement pstmt = con.prepareStatement(query);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				String code = rs.getString("code");
				String name = rs.getString("Name");
				String capital = rs.getString("Capital");
				String continent = rs.getString("continent");
				String region = rs.getString("region");
				double surface = rs.getDouble("surfacearea");
				int population = rs.getInt("population");
				String govermentform = rs.getString("governmentform");
				Country newCountry = new Country(code, name, capital, continent, region, surface, population,
						govermentform);
				results.add(newCountry);
			}
		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}
		return results;
	}

	@Override
	public boolean save(Country country) {
		return true;
	}

	@Override
	public List<Country> findAll() {
		return selectCountry(
				"Select CODE, NAME, CONTINENT, CAPITAL, REGION, SURFACEAREA, POPULATION, GOVERNMENTFORM from Country;");
	}

	@Override
	public Country findByCode(String code) {
		/*
		 * Country c = null;
		 * 
		 * try (Connection con = super.getConnection()) { Statement stmt =
		 * con.createStatement(); ResultSet rs =
		 * stmt.executeQuery("select * from Country where code =" + code + "");
		 * 
		 * while (rs.next()) { c = new Country(rs.getString("code"),
		 * rs.getString("name"), rs.getString("capital"), rs.getString("continent"),
		 * rs.getString("region"), rs.getDouble("surfacearea"), rs.getInt("population"),
		 * rs.getString("governmentform"));
		 * 
		 * } rs.close(); stmt.close(); } catch (Exception sqle) {
		 * System.out.println(sqle); } return c;
		 */ 
		Country ctry = null;

		try (Connection connection = super.getConnection()) {
			Statement stmt = connection.createStatement();
			ResultSet resultset = stmt.executeQuery(
					"select code, name, capital, continent, region, surfacearea, population, governmentform from country where code = '"+ code + "';");

			while (resultset.next()) {
				ctry = new Country(resultset.getString("code"),
						resultset.getString("name"), resultset.getString("capital"), resultset.getString("continent"),
						resultset.getString("region"), resultset.getDouble("surfacearea"),
						resultset.getInt("population"), resultset.getString("governmentform"));
			}
			resultset.close();
			stmt.close();
		} catch (Exception e) {
			System.out.println(e);
		}
		return ctry;
	}

	@Override
	public List<Country> find10LargestPopulations() {
		return selectCountry(
				"select CODE, NAME, CONTINENT, CAPITAL, REGION, SURFACEAREA, POPULATION, GOVERNMENTFORM from country order BY population DESC limit 10;");

	}

	public List<Country> find10LargestSurfaces() {
		return selectCountry(
				"select CODE, NAME, CONTINENT, CAPITAL, REGION, SURFACEAREA, POPULATION, GOVERNMENTFORM from country order BY SURFACEAREA DESC limit 10;");
	}

	public boolean update(Country country) {

		System.out.println("update");
		int index = Landen.indexOf(country);

		if (index == -1) {
			return false;
		}

		Landen.set(index, country);

		return true;
	}

	public boolean delete(Country country) {
		return Landen.remove(country);
	}

}
