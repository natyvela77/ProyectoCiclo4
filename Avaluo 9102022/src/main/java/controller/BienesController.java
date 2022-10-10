package controller;

import java.sql.ResultSet;
import java.sql.Statement;
import com.google.gson.Gson;

import beans.Bienes;
import connection.DBConnection;

public class BienesController implements IBienesController{

    @Override
    public String registerpropiedad(String idpropiedad, String username, String area, String ciudad, String estrato, String antiguedad, String tipovivienda, String habitaciones, String banos, String centrocomercial, String parque, String valorarriendo, String valorventa, String valormetro) {

        Gson gson = new Gson();

        DBConnection con = new DBConnection();
        String sql = "INSERT INTO bienes values ('" + idpropiedad + "', '" + username + "', '" + area + "','" + ciudad + "', '" + estrato + "', '" + antiguedad + "', '" + tipovivienda + "', '" + habitaciones + "','" + banos + "', '" + centrocomercial + "', '" + parque + "', '" + valorarriendo + "', '" + valorventa + "','"+ valormetro + "')";

        try {
            Statement st = con.getConnection().createStatement();
            st.executeUpdate(sql);

                Bienes bienes = new Bienes(idpropiedad, username, area, ciudad, estrato, antiguedad, tipovivienda, habitaciones, banos, centrocomercial, parque, valorarriendo, valorventa, valormetro);

                st.close();

                return gson.toJson(bienes);

        } catch (Exception ex) {
            System.out.println(ex.getMessage());

        } finally {
            con.desconectar();
        }

        return "false";

    }

}
