import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './template/topo/topo.component';
import { RodapeComponent } from './template/rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, DatePipe } from '@angular/common';
import { NovoAlunoComponent } from './novo-aluno/novo-aluno.component';
import { MatIconModule } from '@angular/material/icon';
import { AlertaSucessoComponent } from './alerta-sucesso/alerta-sucesso.component';
import { EditarAlunoComponent} from './editar-aluno/editar-aluno.component'; 
import { DateFormatDirective } from './DateFormatDirective ';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';




@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    HomeComponent,
    AlunoListaComponent,
    EditarAlunoComponent,
    NovoAlunoComponent,
    AlertaSucessoComponent,
    DateFormatDirective,
    AlunoDetalhesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
