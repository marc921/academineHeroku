import java.awt.Image;
import java.io.File;
import java.io.IOException;
import java.util.Random;

import javax.imageio.ImageIO;

public class Fighter {

	public double posX = 0;
	public double posY = 0;
	public double speedX = 0;
	public double speedY = 0;
	
	public Image image;
	
	public Fighter(double x, double y, String imageFileName){
		Random random = new Random();
		posX = x + 100*random.nextGaussian();
		posY = y + 100*random.nextGaussian();
		speedX = 5*random.nextGaussian();
		speedY = 5*random.nextGaussian();
		
		try {
			image = ImageIO.read(new File(imageFileName));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
	public void move(){
		
		// Moving
		posX += speedX;
		posY += speedY;
		
		// Wall bouncing
		if(posX < 0) speedX = Math.abs(speedX);
		if(posY < 0) speedY = Math.abs(speedY);
		if(posX > Engine.screenSize.getWidth()) speedX = -Math.abs(speedX);
		if(posY > Engine.screenSize.getHeight()) speedY = -Math.abs(speedY);
		
	}

}
