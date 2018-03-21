import java.awt.Dimension;
import java.awt.Toolkit;

// La classe Engine est le coeur du projet. Elle appelle les autres classes et conserve le thread principal dans une boucle infinie.
// Tous les attributs et méthodes d'Engine sont statiques pour pouvoir être appelés par toutes les classes facilement.
public class Engine {
	public static int refreshPeriod = 30;	// Nouveau tour de boucle toutes les 30ms
	public static boolean quit = false;
	public static Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
	
	public static Fighter fighter;
	
	public static void main(String[] args){
		// On crée un carré qui va rebondir sur les côtés de l'écran
		fighter = new Fighter(400, 500, "fighter.png");
		
		// On crée une instance de GUI qui va s'occuper de toute la partie Input/Output
		GUI gui = new GUI();
		
		long lastRefresh = System.currentTimeMillis();
		
		// Engine contient le thread principal qui tourne tant qu'on appuie pas sur Echap
		while(!quit){
			if(System.currentTimeMillis() < lastRefresh + refreshPeriod){
				try {
					Thread.sleep(lastRefresh + refreshPeriod - System.currentTimeMillis());
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
			lastRefresh = System.currentTimeMillis();
			
			// Instructions à exécuter à chaque frame
			// Ici se passent tous les calculs: positions, créations, destructions des éléments... tout ce qui ne relève pas de l'affichage.
			// Faites en sorte de regrouper les différentes parties des instructions dans des fonctions extérieures.
			// N'hésitez pas à créer de nouvelles classes pour vous aider à bien structurer votre code !

			fighter.move();
			
		}
		
		System.exit(0);
	}
	
	public static void doAction(){
		System.out.println("Touche A pressée !");
	}
	
	public static void doAnotherAction(){
		System.out.println("Touche Z pressée !");
	}
	
	public static void quit(){
		quit = true;
	}

}
