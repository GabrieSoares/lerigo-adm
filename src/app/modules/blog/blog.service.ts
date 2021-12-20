import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  urlBlog = `${environment.urlApi}post`;
  constructor(private http: HttpClient) { }

  gravar(blog: any): Promise<any> {
    return this.http.post<any>(this.urlBlog, blog)
      .toPromise();
  }

  listarTodos(status: any) {
    let op: any = { header: {}, params: {} };
    op.params['status'] = status == 1 ? 1 : 0;

    return this.http.get<any>(`${this.urlBlog}s`, op)
      .toPromise();
  }

  listarPost(id: number) {
    return this.http.get<any>(this.urlBlog + '/' +id)
      .toPromise();
  }

  alterarStatus(status: any) {
    status = status == 1 ? 2 : 1;
    return this.http.post<any>(this.urlBlog, status)
      .toPromise();
  }
}
