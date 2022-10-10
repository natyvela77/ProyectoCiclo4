package beans;

public class Bienes {

    private String idpropiedad;
    private String username;
    private String area;
    private String ciudad;
    private String estrato;
    private String antiguedad;
    private String tipovivienda;
    private String habitaciones;
    private String banos;
    private String centrocomercial;
    private String parque;
    private String valorarriendo;
    private String valorventa;
    private String valormetro;

    public Bienes(String idpropiedad, String username, String area, String ciudad, String estrato, String antiguedad, String tipovivienda, String habitaciones, String banos, String centrocomercial, String parque, String valorarriendo, String valorventa, String valormetro) {
        this.idpropiedad = idpropiedad;
        this.username = username;
        this.area = area;
        this.ciudad = ciudad;
        this.estrato = estrato;
        this.antiguedad = antiguedad;
        this.tipovivienda = tipovivienda;
        this.habitaciones = habitaciones;
        this.banos = banos;
        this.centrocomercial = centrocomercial;
        this.parque = parque;
        this.valorarriendo = valorarriendo;
        this.valorventa = valorventa;
        this.valormetro = valormetro;
    }

    public String getIdpropiedad() {
        return idpropiedad;
    }

    public void setIdpropiedad(String idpropiedad) {
        this.idpropiedad = idpropiedad;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getEstrato() {
        return estrato;
    }

    public void setEstrato(String estrato) {
        this.estrato = estrato;
    }

    public String getAntiguedad() {
        return antiguedad;
    }

    public void setAntiguedad(String antiguedad) {
        this.antiguedad = antiguedad;
    }

    public String getTipovivienda() {
        return tipovivienda;
    }

    public void setTipovivienda(String tipovivienda) {
        this.tipovivienda = tipovivienda;
    }

    public String getHabitaciones() {
        return habitaciones;
    }

    public void setHabitaciones(String habitaciones) {
        this.habitaciones = habitaciones;
    }

    public String getBanos() {
        return banos;
    }

    public void setBanos(String banos) {
        this.banos = banos;
    }

    public String getCentrocomercial() {
        return centrocomercial;
    }

    public void setCentrocomercial(String centrocomercial) {
        this.centrocomercial = centrocomercial;
    }

    public String getParque() {
        return parque;
    }

    public void setParque(String parque) {
        this.parque = parque;
    }

    public String getValorarriendo() {
        return valorarriendo;
    }

    public void setValorarriendo(String valorarriendo) {
        this.valorarriendo = valorarriendo;
    }

    public String getValorventa() {
        return valorventa;
    }

    public void setValorventa(String valorventa) {
        this.valorventa = valorventa;
    }

    public String getValormetro() {
        return valormetro;
    }

    public void setValormetro(String valormetro) {
        this.valormetro = valormetro;
    }

    @Override
    public String toString() {
        return "Bienes{" + "idpropiedad=" + idpropiedad + ", username=" + username + ", area=" + area + ", ciudad=" + ciudad + ", estrato=" + estrato + ", antiguedad=" + antiguedad + ", tipovivienda=" + tipovivienda + ", habitaciones=" + habitaciones + ", banos=" + banos + ", centrocomercial=" + centrocomercial + ", parque=" + parque + ", valorarriendo=" + valorarriendo + ", valorventa=" + valorventa + ", valormetro=" + valormetro + '}';
    }
   
}
