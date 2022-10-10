package controller;

import java.util.Map;

public interface IUsuarioController {

    public String login(String username, String contrasena);
    
    public String register(String username, String nombre, String apellido, String correo, String contrasena);
    

}
