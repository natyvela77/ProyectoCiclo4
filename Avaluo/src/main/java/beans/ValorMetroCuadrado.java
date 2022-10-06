package beans;

public class ValorMetroCuadrado {
    private int id;
    private double area;
    private String ubicacion;
    private String ciudad;
    private int estrato;
    private int antiguedad;
    private String tipoVivienda;
    private int habitaciones;
    private int banos;
    private String centroComercial;
    private String parque;
    private double valorArriendo;
    private double valorVenta;

    public ValorMetroCuadrado(int id, double area, String ubicacion, String ciudad, int estrato, int antiguedad, String tipoVivienda, int habitaciones, int banos, String centroComercial, String parque, double valorArriendo, double valorVenta) {
        this.id = id;
        this.area = area;
        this.ubicacion = ubicacion;
        this.ciudad = ciudad;
        this.estrato = estrato;
        this.antiguedad = antiguedad;
        this.tipoVivienda = tipoVivienda;
        this.habitaciones = habitaciones;
        this.banos = banos;
        this.centroComercial = centroComercial;
        this.parque = parque;
        this.valorArriendo = valorArriendo;
        this.valorVenta = valorVenta;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getArea() {
        return area;
    }

    public void setArea(double area) {
        this.area = area;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public int getEstrato() {
        return estrato;
    }

    public void setEstrato(int estrato) {
        this.estrato = estrato;
    }

    public int getAntiguedad() {
        return antiguedad;
    }

    public void setAntiguedad(int antiguedad) {
        this.antiguedad = antiguedad;
    }

    public String getTipoVivienda() {
        return tipoVivienda;
    }

    public void setTipoVivienda(String tipoVivienda) {
        this.tipoVivienda = tipoVivienda;
    }

    public int getHabitaciones() {
        return habitaciones;
    }

    public void setHabitaciones(int habitaciones) {
        this.habitaciones = habitaciones;
    }

    public int getBanos() {
        return banos;
    }

    public void setBanos(int banos) {
        this.banos = banos;
    }

    public String getCentroComercial() {
        return centroComercial;
    }

    public void setCentroComercial(String centroComercial) {
        this.centroComercial = centroComercial;
    }

    public String getParque() {
        return parque;
    }

    public void setParque(String parque) {
        this.parque = parque;
    }

    public double getValorArriendo() {
        return valorArriendo;
    }

    public void setValorArriendo(double valorArriendo) {
        this.valorArriendo = valorArriendo;
    }

    public double getValorVenta() {
        return valorVenta;
    }

    public void setValorVenta(double valorVenta) {
        this.valorVenta = valorVenta;
    }

    @Override
    public String toString() {
        return "ValorMetroCuadrado{" + "id=" + id + ", area=" + area + ", ubicacion=" + ubicacion + ", ciudad=" + ciudad + ", estrato=" + estrato + ", antiguedad=" + antiguedad + ", tipoVivienda=" + tipoVivienda + ", habitaciones=" + habitaciones + ", banos=" + banos + ", centroComercial=" + centroComercial + ", parque=" + parque + ", valorArriendo=" + valorArriendo + ", valorVenta=" + valorVenta + '}';
    }

}

