const int pinCLK = 21;
const int pinDT = 22;
const int pinSW = 23;

// previous state
int _CLK = 1;
int _DT = 1;
int _SW = 1;

unsigned long pressed_at = 0;
unsigned long released_at = 0;

void setup() {
  pinMode(pinCLK, INPUT);
  pinMode(pinDT, INPUT);
  pinMode(pinSW, INPUT_PULLUP);

  Serial.begin(9600);
}

void loop() {
  int CLK = digitalRead(pinCLK);
  int DT = digitalRead(pinDT);
  int SW = digitalRead(pinSW);

  if (CLK != _CLK && CLK == LOW) {
    Serial.println(DT != CLK ? "up" : "down");
  }
  
  unsigned long t = millis();

  if (_SW != SW) {
    if (SW == LOW) {
      Serial.println("press");
      pressed_at = t;
    } else {
      Serial.println("release");
      if (t - released_at < 300) {
        Serial.println("dblclick");
      } else if (t - pressed_at < 300) {
        Serial.println("click");
      } else {
        Serial.println("longclick");
      }
      released_at = t;
    }
  } else if (released_at < pressed_at && t - pressed_at == 600) {
    Serial.println("longpress");
  }

  _CLK = CLK;
  _DT = DT;
  _SW = SW;

  delay(1);
}
