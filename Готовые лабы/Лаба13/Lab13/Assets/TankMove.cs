using UnityEngine;

public class TankMove : MonoBehaviour
{
    Transform bashnya;
    Transform stvol;
    float _tankSpeed = 0.1f;
    float _rotateSpeed = 0.5f;
    MeshRenderer rend;
    AudioSource movementSound;

    void Start()
    {
        bashnya = gameObject.transform.Find("bashnya");
        stvol = bashnya.transform.Find("stvol");
        rend = gameObject.GetComponent<MeshRenderer>();
        movementSound = GetComponent<AudioSource>();
    }

    void Update()
    {
        float z = Input.GetAxis("Vertical");
        transform.Translate(0, 0, z * _tankSpeed);
        float x = Input.GetAxis("Horizontal");
        transform.Rotate(0, x, 0);

        float h = Input.GetAxis("Mouse X");
        bashnya.Rotate(0, h * _rotateSpeed, 0);

        float v = Input.GetAxis("Mouse Y");
        stvol.Rotate(v * _rotateSpeed, 0, 0);
  
        //Debug.Log(stvol.transform.localEulerAngles);
        if (stvol.transform.localEulerAngles.x > 300)
        {
            float new_angle = Mathf.Clamp(stvol.transform.localEulerAngles.x, 350f, 360f);
            stvol.localEulerAngles = new Vector3(new_angle, 0f, 0f);
        }
        else
        {
            float new_angle = Mathf.Clamp(stvol.transform.localEulerAngles.x, 0f, 10f);
            stvol.localEulerAngles = new Vector3(new_angle, 0f, 0f);
        }

        if ((Input.GetAxis("Horizontal") != 0 || Input.GetAxis("Vertical") != 0))
        {
            movementSound.Play();
        }
        if (Input.GetAxis("Horizontal") == 0 && Input.GetAxis("Vertical") == 0)
        {
            movementSound.Stop();
        }
    }
}