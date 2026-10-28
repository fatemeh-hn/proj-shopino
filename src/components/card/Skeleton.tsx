import Skeleton from '@mui/material/Skeleton';
interface Props{
    className:string,
    count:number
}
export default function SkeletonBox({className,count}:Props) {
  return (
    Array.from({length:count}).map((_,index)=>(
      <Skeleton
      key={"skeleton"+index}
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        className={className}
       
      />

    ))
    
  );
}
