import dynamic from 'next/dynamic'
 
const TaskContainer = dynamic(() => import('@/components/task-container'), { ssr: false })

export default function Home() {
  return (
    <>
      <TaskContainer />
    </>
  );
}
