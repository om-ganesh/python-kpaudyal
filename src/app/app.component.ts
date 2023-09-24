import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'my_app';
  input1: string = "";
  input2: string = "";
  input3: string = "";
  input4: string = "";
  input5: string = "";
  result: string = "";

  public generate() {
    // c = callpython(a, b)
    this.result = this.input1 + "\n-------------\n";
    this.result = this.result + "page off\n";
    this.result = this.result + "show version\n";
    this.result = this.result + "show chassis status\n";
    this.result = this.result + "show system | i Module\n";
    this.result = this.result + "scm upstream module summary\n";
    this.result = this.result + "scm downstream module summary\n";
    this.result = this.result + "show run | i module\n";
    this.result = this.result + "show int docsis-mac " + this.input2 + " t\n";
    this.result = this.result + "show int qam " + this.input5 + " | i ofdm\n";
    this.result = this.result + "scm sum tot mac-domain | i " + this.input3 + "\n";
    if (this.input4 != "")
      this.result = this.result + "scm sum tot mac-domain | i " + this.input4 + "\n";
    else this.result = this.result + "! \n";
    this.result = this.result + "show service group " + this.input2 + "\n";
    if (this.input4 != "")
      this.result = this.result + "scm sum tot mac-domain | i " + this.input2 + "-BDR\n";
    else this.result = this.result + "! \n";
    this.result = this.result + "scm docsis-mac summary\n";
    this.result = this.result + "scm docsis-mac " + this.input2 + " summary\n";
    this.result = this.result + "show application class\n"


    // this.result = String(Number(this.input1) + Number(this.input2));
  }
  // onKey(event: any) {
  //   console.log(event.target.value)
}
