import { useCallback, useEffect, useMemo, useState } from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import Modal from 'react-modal';
import { Comic } from "../../interfaces/GeneralTypes";
import { ModalContainer, Content, Search } from "./styled";
import { Button } from '../Button';
import toast, { Toaster } from 'react-hot-toast';

interface ModalProps {
  selectedComic: Comic;
  isModalOpen: number;
}

type Libraries = (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[];
const libraries: Libraries = ["places"];

const customStyles = {
  overlay:{ 
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(8px)',
    positon: 'relative',
    zIndex: '1111'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const containerStyle = {
  width: '100%',
  height: '50vh'
};

function ChildModal(props: any){
  const [open, setOpen] = useState(false);
  const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
  const [map, setMap] = useState<google.maps.Map>()
  const [destination, setDestination] =
  useState<google.maps.LatLngLiteral | null>(null);
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>();
  const [response, setResponse] = useState<google.maps.DistanceMatrixResponse | null>(null);
  
  const apiKey = import.meta.env.VITE_MAPS_API_KEY

  const center = { lat: latitude, lng: longitude }

  const comicShop = { lat: -5.7536912, lng: -35.2671929 }
  

  const handleOpen = () => {
		setOpen(true);
    getLocation()
	};
  
	const handleClose = () => {
		setOpen(false);
	};


  function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(pos => {
				setLatitude(pos.coords.latitude);
				setLongitude(pos.coords.longitude);
			});
    }
	}

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };
  

  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref)
  }

  const onPlacesChanged = () => {
    const places = searchBox!.getPlaces()
    console.log(places)
    const place = places![0]

    const location ={ 
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    }

    console.log(location)
    setDestination(location)
    setDestination(null);
    setResponse(null)
    traceRoute()
    map?.panTo(location)
  }

  const traceRoute = () => {
    if (center && destination) {
      center;
      destination;
    }
  };

  const directionsServiceOptions =
    // @ts-ignore
    useMemo<google.maps.DirectionsRequest>(() => {
      return {
        center,
        destination,
        travelMode: "DRIVING",
      };
    }, [center, destination]);

  const directionsCallback = 
    // @ts-ignore
    useCallback((res) => {
      if (res !== null && res.status === "OK") {
        setResponse(res);
      } else {
        console.log(res);
      }
    }, []);

    const directionsRendererOptions = useMemo<any>(() => {
      return {
        directions: response,
      };
    }, [response]);
	
  
  const handleSendComic = () => {
    toast.success('Quadrinho enviado para o seu endereço');
    setOpen(false)
  }

  return (
    <>
      <Button style={{marginLeft: "78%", marginBottom: "1rem"}} onClick={handleOpen}>Receber Quadrinho</Button>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContainer>
          <span onClick={handleClose}>
              <svg width="50" height="36" viewBox="0 0 50 36"   fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4247 2L2 18L18.4247 34M48 18H2.46"   stroke="#202020" stroke-width="4"   stroke-miterlimit="10" stroke-linecap="round"   stroke-linejoin="round"/>
              </svg>
          </span>
          <Content>
            <LoadScript 
              googleMapsApiKey={apiKey}  
              libraries={libraries}
            >   
              <section>
                <aside>
                  <h1>Informe o seu endereço de Entrega<strong/> e tecle Enter para exibi-lo:</h1>
                  <StandaloneSearchBox 
                    onLoad={onLoad}    
                    onPlacesChanged={onPlacesChanged}
                  >
                    <Search
                    type="text"
                      placeholder="Search an address"
                    />
                    
                  </StandaloneSearchBox>
                  <Button 
                      style={
                        {
                          width:"100%", 
                          marginTop:"2rem",
                          background: "#202020",
                        }
                      } 
                      onClick={traceRoute}
                    >
                      Trace a sua rota de entrega
                    </Button>
                  <Button 
                    style={
                      {
                        width:"100%", 
                        marginTop:"2rem"
                      }
                    } 
                    onClick={handleSendComic}
                  >
                    Enviar quadrinho
                  </Button>
                </aside>
                <GoogleMap
                  onLoad={onMapLoad}
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={12}
                >

                  { center && <Marker position={center}/>}
                  { destination && <Marker position={destination} /> }

                  {comicShop && destination && (
                    <DirectionsService
                      options={directionsServiceOptions}
                      callback={directionsCallback}
                    />
                  )}

                  {response && directionsRendererOptions && (
                    <DirectionsRenderer options={directionsRendererOptions} />
                  )}
                </GoogleMap>
              </section>
            </LoadScript>
          </Content>
        </ModalContainer>
      </Modal>
    </>
  )
}

export default function ParentModal({isModalOpen, selectedComic}: ModalProps) {
    const [open, setOpen] = useState(false);
		const closeModal  = () => setOpen(false);

		useEffect(() => {
			if( isModalOpen == 1) { setOpen(false) }
			else { setOpen(true) }
		}, [isModalOpen]);

    const handleCheckCreators = () => {
      if( selectedComic.creator == "" || selectedComic.creator == null ){ return `Não há Criadores Disponiveis`}
      else { return `${selectedComic.creator}, ` }
    }

    const handleCheckDescription = () => {
			if( selectedComic.description == "" ){ return `Não há Descrição Disponivel`}
			else { return selectedComic.description}
		}
  
  return (
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContainer>
          <span onClick={closeModal}>
              <svg width="50" height="36" viewBox="0 0 50 36"   fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4247 2L2 18L18.4247 34M48 18H2.46"   stroke="#202020" stroke-width="4"   stroke-miterlimit="10" stroke-linecap="round"   stroke-linejoin="round"/>
              </svg>
          </span>
          <Content>
                <img 
                  src={selectedComic.thumbnail} 
                  alt="Selected Comic thumb" 
                />
                <div>
                      <h1>{selectedComic.title}</h1>
                      <hr/>
                      <p>{handleCheckCreators()}</p>
                      <span dangerouslySetInnerHTML={{__html: handleCheckDescription()}}/>
                </div>
          </Content>
          <ChildModal />
        </ModalContainer>
        <Toaster />
      </Modal>
  )
}