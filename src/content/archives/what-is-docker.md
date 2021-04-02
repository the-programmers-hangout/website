## What is Docker?
Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. Containers allow for total application and environment isolation which makes it much easier to ensure an application runs with any necessary dependencies.

## Why should I use Docker?
The simplest use case for Docker is packaging an application into an image and then running it on any machine running the Docker platform. Think running your API locally on Windows, on your OSX laptop, or on a Linux server in a cloud without making any changes to your codebase, all with the same command.

For more complex deployments consisting of multiple containers, Docker provides a tool called docker-compose. This will read a configuration of one or more Docker containers and run them for you and manage them as a single application.

Another benefit is using it to perform builds or development on local machines to avoid needing to set up a development environment. As dependencies can be a nightmare in situations like this, requiring things like npm or virtualenv and other isolation techniques, containerization can greatly simplify things and shorten the time it takes for someone to get set up on a project. You can even pull down a container containing a language runtime and just start writing code immediately, for languages with REPLs you can use docker to launch a REPL shell for any language without needing to go install a runtime on your machine.

## What's the difference between Docker and a VM?
VMs have been widely used to solve these problems. The key difference between VMs and containers is that containers are not a virtual OS. All containers running on a host share the same parent kernel. Container technology is enabled by core Linux kernel features for isolating applications. When you run a Linux container on a Windows machine using Docker for Windows, a single Linux VM must run as the host for the Linux containers, but when running natively on a Linux machine, no VM is required, and container applications run inside an isolated process, just like any other application.

The advantage to this approach is that it's very lightweight since it doesn't require the overhead of a virtual guest operating system and virtual access to resources through a hypervisor.

## Examples
You can get a fully functional ubuntu machine by just running

```sh
docker run -it ubuntu bash
```

Running an nginx web server can be done easily using docker-compose:

Create: `docker-compose.yml`

```yml
web:
  image: nginx
  volumes:
    - ./mysite.template:/etc/nginx/conf.d/mysite.template
  ports:
    - "8080:80"
  environment:
    - NGINX_HOST=foobar.com
    - NGINX_PORT=80
  command: /bin/bash -c "envsubst < /etc/nginx/conf.d/mysite.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
```

And run:

```sh
docker-compose up -d
```

You can start a Redis instance like this:

```sh
docker run --name my-redis -d redis
```

Then you can inspect the running containers with:

```sh
$ docker ps

CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
d295137f5965        redis               "docker-entrypoint.s…"   6 seconds ago       Up 5 seconds        6379/tcp            my-redis
```

and attach to the running redis container to run commands with redis-cli:

```sh
$ docker exec -it my-redis redis-cli
127.0.0.1:6379> set example-key 1234
OK
127.0.0.1:6379> get example-key
"1234"
```

## Resources

- The official get-started guide: https://docs.docker.com/get-started/
- The public Docker registry: https://hub.docker.com/explore/
- Awesome Docker (a collection of Docker resources): https://github.com/veggiemonk/awesome-docker
- An example application development environment using Docker: https://www.masterzendframework.com/docker-development-environment/
