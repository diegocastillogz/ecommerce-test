define USAGE
Ecommerce-test 

Comandos:
	build				Construir los contenedores de Docker
	build-nocache			Construir los contenedores de Docker sin cache
	start        			Correr el sitio en producción en modo background
	start-no-background		Correr el sitio en modo producción
	logs				Mostrar los logs de Docker			
	stop				Detener los contenedores de Docker
	unit-tests			Corre las pruebas unitarias del frontend
	e2e-tests-console		Corre las pruebas e2e del frontend en consola
endef

export USAGE

RUN = docker exec -it $(NAME)

help:
	@echo "$$USAGE"

build:
	docker-compose build

start:
	docker-compose up -d

start-no-background:
	docker-compose up

stop:
	docker-compose stop

build-nocache:
	docker-compose build --no-cache

logs:
	docker-compose logs

unit-tests:
	docker exec -it frontend sh -c "npm run test"

e2e-tests-console:
	docker exec -it frontend sh -c "npm run cy:run"
