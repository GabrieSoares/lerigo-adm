import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-cad',
  templateUrl: './blog-cad.component.html',
  styleUrls: ['./blog-cad.component.scss'],
  providers: [MessageService]
})
export class BlogCadComponent implements OnInit {
  text: any;
  hyperlink: any = '';
  textoAlt: any;
  imagem: any;
  imagemTemplate: any = "./assets/imgs/modelImg.png";
  autor: any = [];
  editando = false;
  id: any;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private blogService: BlogService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.editando = true;
      this.carregarPost(id);
    }
  }

  async uploadHandler(foto: any, uploader: FileUpload) {
    this.imagem = await this.blobToBase64(foto.files[0]);
    uploader.clear();
  }

  blobToBase64(blob: any) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  gravar() {
    const id = this.id ?? '';
    let img = this.validarImg();
    const html = this.montarHTML();
    const rodape = this.montarRodape();
    const ob = {
      id,
      img64: this.imagem,
      hyperlink: this.hyperlink,
      textoAlt: this.textoAlt,
      imgHtml: img,
      html,
      rodape
    }
    this.blogService.gravar(ob)
      .then(resp => {
        this.messageService.add({ severity: 'sucess', summary: 'sucess', detail: 'Gravado com sucesso!' });
        this.router.navigate(["blog-list"]);
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível gravar os dados!' }));
  }
  validarImg() {
    let resposta = "";
    let txtAlt = this.textoAlt ? `alt="${this.textoAlt}"` : '';
    if (this.imagem && this.imagem != "") {
      switch (this.hyperlink) {
        case '':
          resposta =
            `<img class="ql-video ql-align-center" src="${this.imagem}"` +
            `style="max-width: 600px;" ${txtAlt}>`;
          break;
        default:
          resposta =
            `<a href="${this.hyperlink}" target="_blank">` +
            `<img class="ql-video ql-align-center" src="${this.imagem}"` +
            `style="max-width: 600px;" ${txtAlt}>` +
            `</a>`
          break;
      }
    }
    return resposta;
  }

  montarHTML() {
    let html: any;
    html = "</br>";
    html += this.text;
    return html;
  }

  montarRodape() {
    let data = new Date();
    let dataF = data.toLocaleDateString();
    let rodape =
      `</br>` +
      `<p class="ql-align-justify"><span class="ql-size-large">Autor: ${this.autor}</span></p>` +
      `<p class="ql-align-justify"><span class="ql-size-large">Publido em : ${dataF}</span></p>`;

    return rodape;
  }

  carregarPost(id: number) {
    this.blogService.listarPost(id)
      .then(rs => {
        this.id = rs.id;
        this.imagem = rs.imagem_base64;
        this.hyperlink = rs.hyperlink;
        this.text = rs.html;
        this.textoAlt = rs.texto_alternativo;
        let iniAutor = rs.rodape.indexOf(": ");
        let fimAutor = rs.rodape.indexOf("</span></p>");
        this.autor = rs.rodape.substring(iniAutor + 2, fimAutor);
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados!' }));
  };

  cancelar() {
    this.router.navigate(["blog-list"]);
  }
}
