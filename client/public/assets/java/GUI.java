
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

import javax.swing.JFrame;

@SuppressWarnings("serial")
public class GUI extends JFrame implements KeyListener{
	public Panel panel;
	
	public GUI(){
		// Initialise la fenêtre
		setTitle("Tutorial");
		setExtendedState(JFrame.MAXIMIZED_BOTH);	// plein écran
		setLocationRelativeTo(null);
				
		// Crée le panel à afficher dans la fenêtre.
		// Ce panel va s'actualiser toutes les Engine.refreshPeriod pour afficher une nouvelle image (une frame).
		// panel se lance sur un nouveau thread pour diviser le travail entre le moteur de jeu (Engine) d'un côté et l'affichage (Panel) de l'autre.
		panel = new Panel();
		Thread displayThread = new Thread(panel);
		displayThread.start();	// lance la fonction run() de panel
		
		// Ecoute le clavier pour l'appui de touches. Ajouter MouseListener pour l'écoute de la souris.
        addKeyListener(this);
        addNotify();
		
        // On remplit la fenêtre avec le panel à afficher.
		setContentPane(panel);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setVisible(true);
	}

	
	
	public void keyPressed(KeyEvent e) {
		switch(e.getKeyCode()){
		case KeyEvent.VK_A:
			Engine.doAction();
			break;
		case KeyEvent.VK_Z:
			Engine.doAnotherAction();
			break;
		case KeyEvent.VK_ESCAPE:
			Engine.quit();
			break;
		}
	}

	public void keyReleased(KeyEvent e) {
		switch(e.getKeyCode()){
		case KeyEvent.VK_A:
			System.out.println("Touche A relâchée.");
			break;
		case KeyEvent.VK_Z:
			System.out.println("Touche Z relâchée.");
			break;
		}
		
	}

	public void keyTyped(KeyEvent e) {
		// TODO Auto-generated method stub
		
	}



	
}