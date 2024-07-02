## Iniciar el servidor en local:

Primero deben clonar el repositorio, y luego ejecutar:

```bash
cd s12-16-ft-php-next
cd client
```

A partir de este punto se puede utilizar su manejador de paquetes de preferencia para instalar las dependencias, bien pueden ser npm, pnpm, yarn, bun.

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Para iniciar el servidor:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abrir [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.

## Decisiones técnicas:

Al elaborar este proyecto se tomaron una serie de decisiones técnicas para alcanzar los objetivos en el tiempo estipulado y mantener la calidad del código. Entre ellas estan:

### Dependencias

- [Eslint](https://eslint.org/): Se añadió Eslint para asegurar que todos en el equipo sigan ciertas reglas al escribir código, asi manteniendo la calidad del mismo.

- [Prettier](https://prettier.io/): Se añadió Prettier para mantener un formato único del código, adicionalmente se añadió un plugin de prettier para tailwind, asi las clases de tailwind se ordenan al formatear el código.

- [Class Variance Authority](https://cva.style/docs): se añadió CVA para hacer los componentes mas básicos como Text/Typography/Button, mucho mas reutilizables ya que CVA permite que menejemos los estilos de dichos componentes a traves de "variantes" (util cuando se quiere seguir un [Design System](https://profile.es/blog/que-es-design-system-ejemplo/)), también se puede ver un ejemplo de implementación [aquí](https://www.youtube.com/watch?v=eXRlVpw1SIQ).

- [Tailwind Merge](https://github.com/dcastil/tailwind-merge): se añadió tailwind merge para poder unir clases de tailwind sin conflictos de estilos, mas información y ejemplos [aquí](https://www.youtube.com/watch?v=re2JFITR7TI).

### Componentes

Se utilizara un sistema similar al [Atomic Design](https://www.gluo.mx/blog/atomic-design-que-es-para-que-sirve-y-ejemplos) donde los componentes mas pequeños (átomos) deben ir dentro de la carpeta "/components/ui", dichos componentes deben ser reutilizables. Ejemplos de implementación se pueden encontrar en la libreria de componentes: [shadcn](https://ui.shadcn.com/docs) y el código de cada componente se puede ver en su [repositorio](https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/button.tsx)
