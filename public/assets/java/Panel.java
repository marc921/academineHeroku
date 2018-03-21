
import java.awt.Color;
import java.awt.Graphics;

import javax.swing.JLabel;
import javax.swing.JPanel;

@SuppressWarnings("serial")
public class Panel extends JPanel implements Runnable{
	public static JLabel label;
	
	public Panel(){
		setDoubleBuffered(true);
		setLayout(null);
		label = new JLabel("Ceci est un texte");
		label.setForeground(Color.RED);
		label.setLocation(100, 200);
		label.setSize(label.getPreferredSize());
		add(label);
	}
	
	// Ne pas appeler paintComponent() directement. Toujours passer par revalidate() et repaint().
	// Ne pas mettre de calcul dans paintComponent(). Cette fonction est appelée dès qu'une variable affichée change de valeur ou par repaint().
	// paintComponent met l'écran à jour. Si quelque chose doit bouger à l'écran, affichez-le dans paintComponent()
	public void paintComponent(Graphics g){
		super.paintComponent(g);
		setBackground(Color.BLACK);
		label.setText("Nombre de millisecondes depuis l'Epoch (1er Janvier 1970): "+System.currentTimeMillis());
		label.setSize(label.getPreferredSize());
		
		// Affichage du personnage
		g.drawImage(
			Engine.fighter.image, 
			(int)( Engine.fighter.posX - Engine.fighter.image.getWidth(null)/2 ),
			(int)( Engine.fighter.posY - Engine.fighter.image.getHeight(null)/2 ),
			this
		);
		
	}
	
	
	public void run(){
		long lastRefresh = System.currentTimeMillis();
		
		while(!Engine.quit){
			if(System.currentTimeMillis() < lastRefresh + Engine.refreshPeriod){
				try {
					Thread.sleep( lastRefresh + Engine.refreshPeriod - System.currentTimeMillis());
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
			lastRefresh = System.currentTimeMillis();
			
			// Actualisation de ce qui est affiché à l'écran
			revalidate();	// détermine ce qui doit être modifié à l'écran
			repaint();	// appelle paintComponent()
		}
	}

}
