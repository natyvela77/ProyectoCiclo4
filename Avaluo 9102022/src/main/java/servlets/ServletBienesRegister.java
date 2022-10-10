package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controller.BienesController;

@WebServlet(name = "ServletBienesRegister", urlPatterns = {"/ServletBienesRegister"})
public class ServletBienesRegister extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletBienesRegister() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        BienesController bienes = new BienesController();
        String idpropiedad = request.getParameter("idpropiedad");
        String username = request.getParameter("username");
        String area = request.getParameter("area");
        String ciudad = request.getParameter("ciudad");
        String estrato = request.getParameter("estrato");
        String antiguedad = request.getParameter("antiguedad");
        String tipovivienda = request.getParameter("tipovivienda");
        String habitaciones = request.getParameter("habitaciones");
        String banos = request.getParameter("banos");
        String centrocomercial = request.getParameter("centrocomercial");
        String parque = request.getParameter("parque");
        String valorarriendo = request.getParameter("valorarriendo");
        String valorventa = request.getParameter("valorventa");
        String valormetro = request.getParameter("valormetro");
        String result = bienes.registerpropiedad(idpropiedad, username, area, ciudad, estrato, antiguedad, tipovivienda, habitaciones, banos, centrocomercial, parque, valorarriendo, valorventa, valormetro);

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println(result);
        out.flush();
        out.close();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
