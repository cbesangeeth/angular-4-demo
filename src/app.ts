//our root app component
import {Component, NgModule, NgFor, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { NgForm, FormsModule } from '@angular/forms';
import {TreeModule,TreeNode} from 'primeng/primeng';

class children{
  id:string;
  Name:string;
  Code:string;
  isSelected?:boolean;
  isCustom?:boolean;
}
class dummy{
  product: [children];
Entity:[children];
  Attribute: [children];
}

@Component({
  selector: 'my-app',
  templateUrl: './src/app.html',
})
export class App {
  name:string;
  InsurencObj:[dummy];
  constructor() {
    this.name = `Angular! v${VERSION.full}`;
    this.InsurencObj = {
		product: [{
			id: "0", Name: "A", Code: "1001", isSelected: false, isCustom: false,
			Entity: [{
				Id: "1", Name: "Entity1", Code: "2001", isSelected: false, isCustom: false,
				Attribute: [{
					Id: "2", Name: "Att1", Code: "2001", isSelected: false, isCustom: false,
				}, {
					Id: "3", Name: "Att1", Code: "2001", isSelected: false, isCustom: false,
				}]
			}, {
				Id: "4", Name: "Entity1", Code: "2001", isSelected: false, isCustom: false,
				Attribute: [{
					Id: "5", Name: "Att1", Code: "2001", isSelected: false, isCustom: false,
				}, {
					Id: "6", Name: "Att1", Code: "2001", isSelected: false, isCustom: false,
				}]
			}]
		},
		{
			id: "9", Name: "B", Code: "1001", isSelected: false, isCustom: false,
			Entity: [{
				Id: "7", Name: "Entity1", Code: "2001", isSelected: false, isCustom: false,
				Attribute: [{
					Id: "8", Name: "Att1", Code: "2001", isSelected: false, isCustom: false,
				}]
			}]
		}]
	}
  }
  

	expandClick(x) {
		if (x.showObj === undefined) {
			x.showObj = true;
		} else {
			x.showObj = !x.showObj;
		}
	}
	
	addObj(x) {
		if (x.showAttribute === undefined) {
			x.showAttribute = true;
		}

		x.push({
			Id: "",
			Name: "",
			Code: "",
			isSelected: false,
			isCustom: true
		});
	}




}

@NgModule({
  imports: [ BrowserModule,  FormsModule],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}