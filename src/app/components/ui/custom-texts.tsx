import { textContainer, textVariant2 } from '@/utils/motion';
import { motion } from 'framer-motion';

interface ICustomTexts {
  title : string ,
  textStyles: string
}


export const TypingText = ({ title, textStyles }: ICustomTexts) => (
  <motion.p
    variants={textContainer}
    className={`phoneMax:text-xl ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);