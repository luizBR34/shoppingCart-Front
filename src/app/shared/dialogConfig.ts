import { MatDialogConfig } from '@angular/material'; // --> USADO PARA DIALOGO

export const dialogConfig = new MatDialogConfig();

dialogConfig.disableClose = false; 
dialogConfig.autoFocus = true;
dialogConfig.closeOnNavigation = true;

