import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})

//Service não é adiciona automaticamente no app.module.ts
//Se eu quisesse exportar ele fora do módulo (que nesse caso não)
//Colocaria la no "providers" do app.module.ts

export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
