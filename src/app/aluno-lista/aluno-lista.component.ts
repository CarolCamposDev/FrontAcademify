import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';
import { AlunoDetalhesComponent } from '../aluno-detalhes/aluno-detalhes.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css'],
})
export class AlunoListaComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nome', 'matricula', 'nascimento', 'dataHoraCadastro', 'acao'];
  dataSource: MatTableDataSource<Aluno> = new MatTableDataSource<Aluno>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private dialog: MatDialog
  ) { } // Injete o Router no construtor

  ngAfterViewInit() {
    this.listarAlunos();
  }

  listarAlunos(): void {
    this.alunoService.listarAlunos().subscribe((alunos: Aluno[]) => {
      console.log('Dados recebidos:', alunos);

      alunos.forEach(aluno => {
        // Certifique-se de que aluno.nascimento é um objeto Date ou uma string no formato de data adequado.
        aluno.nascimento = new Date(aluno.nascimento);
      });

      this.dataSource.data = alunos;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  abrirDetalhesAluno(aluno: Aluno): void {
    // Aqui você pode usar um serviço ou um modal para exibir os detalhes
    // Por exemplo, usando um serviço de dialog do Angular Material
    this.dialog.open(AlunoDetalhesComponent, {
      width: '300px',
      data: aluno,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removerAluno(aluno: Aluno): void {
    const alunoId = aluno.id as number;
    this.alunoService.removerAluno(alunoId).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((a) => a.id !== alunoId);
    });
  }

  editarAluno(alunoId: number): void {

    this.router.navigate(['/editaraluno', alunoId]);
  }
}
