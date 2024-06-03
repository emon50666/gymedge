
import team_1 from '../../../assets/team_1.png'
import team_2 from '../../../assets/team_2.png'
import team_3 from '../../../assets/team_3.png'


const Team = () => {
    return (
        <div className='px-5 mt-12'>
              <h1 className=" text-3xl mt-3 md:text-4xl text-center font-bold">OUR EXPERT TRAINERS </h1>
                    <span className='border-b-4 mx-auto border-orange-500 w-[60px] mt-2 flex '></span>
                    <div className='grid md:grid-cols-3 mt-10 gap-5'>
                       <div className=''>
                       <div>
                      
                            <img src={team_1} alt="" className='w-[400px] rounded-md '/>
                            
                        </div>
                        <div className='bg-orange-500/90 text-white rounded-md text-center md:w-80 justify-start p-2 bottom-20  relative m-auto'>
                            <h2 className='font-bold text-2xl'>Ellie Watson</h2>
                            <p className='font-semibold'>Fitness Trainer</p>
                            <p className='text-sm'>He has helped numerous clients achieve their fitness goals through customized workout plans and motivational coaching.</p>
                            
                            </div>
                       </div>
                       <div>
                       <div>
                            <img src={team_2} alt="" className='w-[400px] rounded-md '/>
                        </div>
                        <div className='bg-orange-500/90 text-white rounded-md text-center md:w-80 justify-start p-2 bottom-20  relative m-auto'>
                            <h2 className='font-bold text-2xl'>Mack Jon</h2>
                            <p className='font-semibold'>Youga Trainer</p>
                            <p className="text-sm"> With a degree in dietetics and extensive experience working with athletes and fitness enthusiasts, </p>
                            
                            </div>
                       </div>
                       <div>
                       <div>
                            <img src={team_3} alt="" className='w-[400px] rounded-md  '/>
                        </div>
                        <div className='bg-orange-500/90 text-white rounded-md text-center md:w-80 justify-start p-2 bottom-20  relative m-auto'>
                            <h2 className='font-bold text-2xl'>Jenifer Alex</h2>
                            <p className='font-semibold'>Weight  Trainer</p>
                            <p className="text-sm">  yoga practices with modern fitness techniques. His classes at Gym Edge are designed to improve flexibility, strength, and mental clarity. </p>
                            
                            </div>
                       </div>
                    </div>


                    
        </div>
    );
};

export default Team;