# MiFleet: API de Gestión de Flotas para Autoescuelas

## Descripción General

MiFleet es una API RESTful diseñada para facilitar la gestión y operación de flotas vehiculares en autoescuelas. Esta solución permite a los instructores y al personal administrativo una gestión eficiente de los vehículos, alineando las prácticas de negocio con estándares modernos de sostenibilidad y eficiencia.

## Arquitectura y Diseño

La API está construida siguiendo los principios de la Arquitectura Limpia y Domain-Driven Design (DDD), tal como se describe en las obras de Robert C. Martin y Eric Evans, respectivamente. Esta aproximación coloca el dominio del negocio en el centro del diseño y fomenta una separación clara entre la lógica de negocio y la infraestructura.

### Características de la Arquitectura:

- **Capas separadas** para lógica de negocio, interfaz de usuario, adaptadores y persistencia de datos.
- **Entidades de dominio** ricas y bien definidas que encapsulan la lógica de negocio esencial.
- **Casos de uso** que describen la lógica de negocio y las operaciones permitidas.
- **Adaptadores** que conforman la conexión entre la API y los servicios externos o la base de datos.
- **Eventos de dominio** que permiten una comunicación desacoplada entre diferentes partes del sistema.

## Estructura de Directorios

La siguiente es la estructura de directorios que refleja la organización del código siguiendo DDD:

```
fleetManagement/
│
├── drivingSchools/
│   ├── application/
│   │   └── subscribers/
│   │       └── CreateDrivingSchoolOnUserCreated.ts
│   ├── domain/
│   │   ├── model/
│   │   │   └── DrivingSchool.ts
│   │   │   └── ...
│   └── ...
│
├── expenses/
│   └── domain/
│       └── Expense.ts
│
└── users/
    ├── application/
    │   ├── useCases/
    │   │   ├── FindUserTokenUseCase.ts
    │   │   └── RegisterUserUseCase.ts
    │   └── ...
    ├── domain/
    │   ├── model/
    │   │   └── User.ts
    │   │   └── Owner.ts
    │   │   └── Teacher.ts
    │   └── ...
    └── ...
```

### Ejemplos de Endpoints:

- **POST `/login`**: Endpoint para autenticación de usuarios.
- **POST `/register`**: Endpoint para el registro de nuevos usuarios.

## Desarrollo Local

Para configurar el entorno de desarrollo local y comenzar a trabajar con la API, siga estos pasos:

1. Clonar el repositorio.
2. Instalar las dependencias con `npm install`.
3. Iniciar el servidor de desarrollo con `npm run dev`.

## Contribuciones

Las contribuciones para mejorar MiFleet son bienvenidas. Consulte el archivo `CONTRIBUTING.md` para obtener detalles sobre el proceso de contribución.

## Licencia

Este proyecto se distribuye bajo la licencia [Nombre de la Licencia]. Para más detalles, vea el archivo `LICENSE`.
