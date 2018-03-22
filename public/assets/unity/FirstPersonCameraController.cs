using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FirstPersonCameraController : MonoBehaviour {
    public float rotateSpeed = 5;
    public GameObject player;

    private float xRot;
    private float yRot;
	
	// Update is called once per frame
	void Update () {
        xRot += Input.GetAxis("Mouse X") * rotateSpeed;
        yRot += -1 * Input.GetAxis("Mouse Y") * rotateSpeed;
        transform.eulerAngles = new Vector3(yRot, xRot, 0);
    }

    void FixedUpdate()
    {
        transform.position = player.transform.position + new Vector3(0, (player.transform.localScale.y / 2) * 0.9f, 0);
    }
}
