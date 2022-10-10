
package beans;


public class Contrato {
    private int idcontrato;
    private int idpropiedad;
    private String tipocontrato;
    private String username;

    public Contrato(int idcontrato, int idpropiedad, String tipocontrato, String username) {
        this.idcontrato = idcontrato;
        this.idpropiedad = idpropiedad;
        this.tipocontrato = tipocontrato;
        this.username = username;
    }

    public int getIdcontrato() {
        return idcontrato;
    }

    public void setIdcontrato(int idcontrato) {
        this.idcontrato = idcontrato;
    }

    public int getIdpropiedad() {
        return idpropiedad;
    }

    public void setIdpropiedad(int idpropiedad) {
        this.idpropiedad = idpropiedad;
    }

    public String getTipocontrato() {
        return tipocontrato;
    }

    public void setTipocontrato(String tipocontrato) {
        this.tipocontrato = tipocontrato;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "Contrato{" + "idcontrato=" + idcontrato + ", idpropiedad=" + idpropiedad + ", tipocontrato=" + tipocontrato + ", username=" + username + '}';
    }
     
}
