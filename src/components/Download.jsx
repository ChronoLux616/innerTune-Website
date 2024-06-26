import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

const DownloadSection = () => {
	return (
		<div className="mt-20">
	      	<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
		        Desca
		        <span className="bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text">
		          rgar <i className="fi fi-br-down-to-line"></i>
		        </span>
		    </h2>

		    <div className="flex flex-col items-center mt-6 p-16 lg:mt- ">
	            <Card className="card-button max-w-sm bg-neutral-200 text-center hover:bg-gray-800">
			      <h5 className="text-2xl font-bold text-lg tracking-tight text-gray-100 dark:text-gray">
			        Descargar versión Estable
			      </h5>
			      <div className="text-5xl text-white rounded-full">
	                <i class="fi fi-brands-android"></i>
	              </div>
			      <p className="font-normal text-gray-400 dark:text-gray-400">
			        Descarga la versión de Android (APK) de InnerTune sin errores ni bugs.
			      </p>
			      <div className="flex flex-wrap gap-2 mx-auto ">
				      <Button href="https://github.com/Arturo254/InnerTune/releases/download/0.6.1/app-foss-release.apk" size="sm" gradientDuoTone="pinkToOrange">
					    	<div className="text-3xl mx-3">
			                	<i class="fi fi-rr-download"></i>
			              	</div>
				        	<h4 className="mt-1 mb-2 text-xl">Descargar</h4>
				      </Button>
				   </div>
			    </Card>
	        </div>

	        <div className="flex flex-col items-center mt-6 p-16 lg:mt- ">
	            <Card className="card-button max-w-sm bg-neutral-200 text-center hover:bg-gray-800">
			      <h5 className="text-2xl font-bold text-lg tracking-tight text-gray-100 dark:text-gray">
			        Descargar versión Beta
			      </h5>
			      <div className="text-5xl text-white rounded-full">
	                <i class="fi fi-brands-android"></i>
	              </div>
			      <p className="font-normal text-gray-400 dark:text-gray-400">
			        Descarga la versión de Android (APK) de InnerTune con funciones y Características experimentales.
			      </p>
			      <div className="flex flex-wrap gap-2 mx-auto">
				      <Button href="https://github.com/Arturo254/InnerTune/releases/download/0.6.1/app-foss-release.apk" size="sm" gradientDuoTone="pinkToOrange">
					    	<div className="text-3xl mx-3">
			                	<i class="fi fi-rr-download"></i>
			              	</div>
				        	<h4 className="mt-1 mb-2 text-xl">Descargar</h4>
				      </Button>
				   </div>
			    </Card>
	        </div>
	        <div className="w-200 m-10 lg:mt-10 items-center">
				<Alert color="failure" icon={HiInformationCircle}>
			       	Esta es una versi&oacute;n beta de InnerTune, si tienes problemas con la app, por favor reportalos en el repositorio de GitHub. 
			       	<a href="https://github.com/Arturo254/InnerTune/issues" className="font-bold" target="_blank"> Reportar problema</a>
				</Alert>
			</div>
		</div>
	);
};

export default DownloadSection;