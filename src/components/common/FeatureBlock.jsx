import { string } from "prop-types";

function FeatureBlock({content}){
  return(
    <span className="px-[2%] py-1 text-[1.1rem] border border-black rounded-full hover:bg-black hover:text-white duration-200 select-none">
      {content}
    </span>
  )
}

FeatureBlock.propTypes = {
  content: string.isRequired,
}

export default FeatureBlock;