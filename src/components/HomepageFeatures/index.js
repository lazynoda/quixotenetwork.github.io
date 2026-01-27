import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Uso Libre',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Quixote Network es una red de comunicaciones abierta y de uso libre, 
        diseñada para que cualquier persona interesada pueda participar, 
        experimentar y colaborar sin barreras de entrada.
      </>
    ),
  },
  {
    title: 'Experimentación',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Quixote Network es un espacio de experimentación, donde radioaficionados 
        y aficionados a las comunicaciones participan mediante nodos y enlaces 
        para explorar nuevas formas de comunicación, siempre dentro de la legalidad vigente.
      </>
    ),
  },
  {
    title: 'Descentralización',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Quixote Network es una red de comunicaciones descentralizada, sin 
        control central ni dependencias únicas, donde cada nodo actúa como 
        parte activa del tejido que sostiene la red.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
