package test;
import beans.ValorMetroCuadrado;
import connection.DBConnection;
import java.sql.ResultSet;
import java.sql.Statement;

public class OperacionesBD {
    public static void main(String[] args) {
        
    }
    public static void actualizarValorMetroCuadrado(int id, String tipoVivienda){
        DBConnection con = new DBConnection();
        String sql="UPDATE valormetrocuadrado SET tipoVivienda='"+ tipoVivienda+"'WHERE id = "+id;
        try {
            Statement st = con.getConnection().createStatement();
            st.executeUpdate(sql);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        finally{
            con.desconectar();
        }
    }
    public static void listarValorMetroCuadrado() {
        DBConnection con = new DBConnection();
        String sql="SELECT * FROM valormetrocuadrado";
        try {
            Statement st = con.getConnection().createStatement();
            ResultSet rs = st.executeQuery(sql);
            while (rs.next()){
                int id = rs.getInt("id");
                double area = rs;
                String ubicacion;
                String ciudad;
                int estrato;
                int antiguedad;
                String tipoVivienda;
                int habitaciones;
                int banos;
                String centroComercial;
                String parque;
                double valorArriendo;
                double valorVenta;
            }
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        finally{
            con.desconectar();
        }
    }
}
