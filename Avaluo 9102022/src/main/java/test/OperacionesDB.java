package test;

import beans.Bienes;
import connection.DBConnection;
import java.sql.ResultSet;
import java.sql.Statement;
       
public class OperacionesDB {

    public static void main() {
        //ListarBienes();
        actualizarBienes(1, "bogota");
    }
    
    public static void actualizarBienes(int idpropiedad, String ciudad) {
        
        DBConnection con = new DBConnection();
        String sql = "UPDATE bienes SET ciudad = '" + ciudad + "' where idpropiedad = " + idpropiedad;
        
        try {
            Statement st = con.getConnection().createStatement();
            st.executeUpdate(sql);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }
    }
   
    public static void ListarBienes(){
        
        DBConnection con = new DBConnection();
        String sql = "SELECT * FROM bienes;";
        
        try {
            Statement st = con.getConnection().createStatement();
            ResultSet rs = st.executeQuery(sql);
            while (rs.next()) {
                int idpropiedad = rs.getInt("idpropiedad");
                String username = rs.getString ("username");
                double area = rs.getDouble("area");
                String ciudad = rs.getString ("ciudad");
                int estrato = rs.getInt("estrato");
                int antiguedad = rs.getInt("antiguedad");
                String tipovivienda = rs.getString("tipovivienda");
                int habitaciones = rs.getInt("habitaciones");
                int banos = rs.getInt("banos");
                boolean centrocomercial = rs.getBoolean("centrocomercial");
                boolean parque = rs.getBoolean("parque");
                double valorarriendo = rs.getDouble("valorarriendo");
                double valorventa = rs.getDouble("valorventa");
                double valormetro = rs.getDouble("valormetro");
                
                Bienes bienes = new Bienes(idpropiedad, username, area, ciudad, estrato, antiguedad, tipovivienda, habitaciones, banos, centrocomercial, parque, valorarriendo, valorventa, valormetro);
                System.out.println(bienes.toString());
            }
            st.executeQuery(sql);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }
    }   
}
