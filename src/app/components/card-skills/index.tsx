import { motion } from 'framer-motion';
import Image from 'next/image';

export interface ISkills {
  imageSrc: string;
  link: string;
  skillName: string;
  index?: number;
}

const CardSkill: React.FC<ISkills> = ({
  imageSrc,
  link,
  skillName,
  index,
}) => {
  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.09 * index,
      },
    }),
    exit: {
      opacity: 0,
      y: 100,
    },
  };
  const noAnimations = {
    
  };

  return (
    <motion.div
      key={index} // Adicionando key para reiniciar a animação quando o componente é montado novamente
      variants={skillName ? fadeInAnimationsVariants : noAnimations}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <a className="link-skills whitespace-nowrap" target="_blank" href={link}>
        <Image
          className="w-full"
          src={imageSrc}
          alt={skillName ? skillName : "icon"}
          title={skillName}
          width={48}
          height={48}
        />
        {skillName}
      </a>
    </motion.div>
  );
};

export default CardSkill;
