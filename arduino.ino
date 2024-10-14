const int pinCLK = 21;
const int pinDT = 22;
const int pinSW = 23;
const int pinBtn = 2;

// previous state
int _CLK = 1;
int _DT = 1;
int _SW = 1;
int _Btn = 1;

void setup() {
  pinMode(pinCLK, INPUT);
  pinMode(pinDT, INPUT);
  pinMode(pinSW, INPUT_PULLUP);
  pinMode(pinBtn, INPUT_PULLUP);

  Serial.begin(9600);
}

void loop() {
  int CLK = digitalRead(pinCLK);
  int DT = digitalRead(pinDT);
  int SW = digitalRead(pinSW);
  int Btn = digitalRead(pinBtn);

  if (CLK != _CLK && CLK == LOW) {
    Serial.println(DT != CLK ? "up" : "down");
  }

  if (SW != _SW && SW == LOW) {
    Serial.println("enter");
  }

  if (Btn != _Btn && Btn == LOW) {
    Serial.println("space");
  }

  _CLK = CLK;
  _DT = DT;
  _SW = SW;
  _Btn = Btn;

  delay(1);
}
