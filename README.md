# TODO App (Frontend)

Aplicação frontend para gerenciamento de tarefas (TODO), desenvolvida com Angular. Esta aplicação consome a API REST do backend para gerenciar as tarefas.

## Tecnologias Utilizadas
- **Angular**
- **TypeScript**
- **Angular Material**

### Repositório do Backend
🔗 [Todo (Backend)](https://github.com/Matheus-Faneco/todo-django)

### Como rodar
Os repositórios tanto do frontend quanto do backend possuem um Dockerfile já configurado para um ambiente de desenvolvimento.

Para rodar o projeto usando as imagens no Docker Hub, basta criar um arquivo docker-compose.yml. As imagens do frontend e do backend serão baixadas no Docker Hub e os containers estarão prontos pra execução.

services:
  backend:
    image: faneco/desenvolvimento-backend:latest
    ports:
      - "8000:8000"
    command: python manage.py runserver 0.0.0.0:8000

  frontend:
    image: faneco/desenvolvimento-frontend:latest
    ports:
      - "4200:4200"
    command: npm start

