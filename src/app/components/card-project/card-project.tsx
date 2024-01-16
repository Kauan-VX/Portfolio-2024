import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface IProject{
  imageBg?: string,
  name: string,
  index: number,
}

const CardProject : React.FC<IProject> = ({ imageBg , name , index}) => {
  return (
      <TiltCard imageBg={imageBg} name={name} index={index}/>
  );
};

const TiltCard: React.FC<IProject> = ({ imageBg , name , index}) => {
  const fadeInAnimationsVariants = {
    initial: {
     opacity: 0,
      y: 100,
    },
    animate: (index: number) => ( {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      
      },
    }),
  };


  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e : any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };



  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={fadeInAnimationsVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      
      className="relative h-[32rem] w-[26rem] rounded-xl bg-gradient-to-br from-[#5ea2ef] to-[#0072f5]"
    >
      <div
      
             style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage : `url(${imageBg})`
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-cover bg-center bg-no-repeat  shadow-lg"
      >
       
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
        {name}
        </p>
      </div>
    </motion.div>
  );
};

export default CardProject;