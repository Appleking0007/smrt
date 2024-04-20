"use client";
import { FC, useRef, useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBook, faGear, faAnglesLeft, faAnglesRight, faPrint, faLink, faFile, faX, faFloppyDisk, faPlus } from "@fortawesome/free-solid-svg-icons";
import Markdown from 'react-markdown';
import { useParams } from "react-router-dom";

const Page: FC = () => {
    
    let { note } = useParams();

    const [isOpen, setIsOpen] = useState(true)
    const showMenu = () => {
        if (isOpen) setIsOpen(false)
        else setIsOpen(true)
    }

    const [notes, setNotes] = useState<any | any>(null);

    const [activeNote, setActiveNote] = useState(null)

    useEffect(() => {
        const init = () => {
            fetch('/api/note')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setNotes(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });

        }
        init()
    }, []);

    const Copy = () => {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }

    const [selectedNote, setSelectedNote] = useState(null);

    const showDelete = (id:any) => {
        setSelectedNote(id);
    }

    const hideDelete = () => {
        setSelectedNote(null);
    }

    const handleDelete = () => {
        fetch(`/api/notes`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: selectedNote })
        })
        .then(response => {
            // Refresh the notes list after successful deletion
            return fetch('/api/notes');
        })
        .then(response => response.json())
        .then(data => {
            setNotes(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }


    const [visibleNew, setVisibleNew] = useState(false);
    const [newName, setNewName] = useState(false);

    const newNameChange = (e:any) => {
        setNewName(e.target.value)
    }

    const showCreate = () => {
        setVisibleNew(true);
    }

    const hideCreate = () => {
        setVisibleNew(false);
    }

    const handleCreate = () => {
        fetch(`/api/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newName })
        })
        .then(response => {
            setVisibleNew(false);
            return fetch('/api/notes');
        })
        .then(response => response.json())
        .then(data => {
            setNotes(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    const inputRef = useRef<HTMLInputElement>(null);
    const mainNadpis = 'I4 HS';
    const nadpisHlavni = 'Dynamický routing';
    const odst1 = 'Dynamický routing nám zajišťuje routovací infrastrukturu, do které nemusíme zasahovat. Nemusíme psát routovací tabulku, nemusíme myslet na změny v síti. Musíme DRP jen nastavit.';
    const odst2 = 'Kromě funkcí routingu nám DRP poskytují:';
    const odst3 = '• Škálovatelnost';
    const odst4 = '• Rychlou konvergenci';
    const odst5 = '• Dostupnost';
    const nadpisDruhy = 'Charekteristika DRP';
    const odst6 = 'O každém dynamickém routovacím protokolu můžeme říct, že má minimálně:';
    const odst7 = '• Algoritmus';
    const odst8 = '• Metriku';
    const odst9 = '• Zprávy daného protokolu';

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);
    const [isHovered7, setIsHovered7] = useState(false);
    const [isDivVisible, setIsDivVisible] = useState(false);
    const [div1Visible, setDiv1Visible] = useState(true);
    const [div2Visible, setDiv2Visible] = useState(true);
    const [div3Visible, setDiv3Visible] = useState(true);
    const [firstButtonIcon, setFirstButtonIcon] = useState(faAnglesRight);

    const toggleDivVisibility = () => {
        setIsDivVisible(prev => !prev);
        setFirstButtonIcon(prevIcon => (prevIcon === faAnglesLeft ? faAnglesRight : faAnglesLeft));
    };

    
    return (
        <div className="flex flex-row h-screen">
            <div className="flex flex-col pt-[10px] pb-[10px] border-r-[2px] border-[#F5F5F4] h-screen justify-between">
                <div className="w-[82px] h-[224px] flex flex-col justify-evenly">
                    <button
                        className={`h-[64px] ${isHovered4 ? 'bg-gray-200' : ''}`}
                        onMouseEnter={() => setIsHovered4(true)}
                        onMouseLeave={() => setIsHovered4(false)}
                    >
                        <FontAwesomeIcon className="h-[24px] w-[27px] text-[#37352F]" icon={faHouse}/>
                    </button>
                    <button
                        className={`h-[64px] ${isHovered5 ? 'bg-gray-200' : ''}`}
                        onMouseEnter={() => setIsHovered5(true)}
                        onMouseLeave={() => setIsHovered5(false)}
                    >
                        <FontAwesomeIcon className="text-[#000000] h-[24px] w-[21px]" icon={faBook}/>
                    </button>
                    <button
                        className={`h-[64px] ${isHovered6 ? 'bg-gray-200' : ''}`}
                        onMouseEnter={() => setIsHovered6(true)}
                        onMouseLeave={() => setIsHovered6(false)}
                    >
                        <FontAwesomeIcon className="text-[#37352F] h-[24px] w-[22,63px]" icon={faGear}/>
                    </button>
                </div>
                <div>
                    <button className="h-[64px] w-[82px]" onClick={toggleDivVisibility}><FontAwesomeIcon
                        className="text-[#37352F] h-[24px] w-[25,99px]" icon={firstButtonIcon}/></button>
                </div>
            </div>
            {isDivVisible && (
                <div className="border-[#EDEDF0] border-r-[3px] w-[250px] pt-[24px] pb-[24px] flex flex-col space-y-[5px]">
                    <div>
                        {div1Visible && (
                            <div className={`flex flex-row justify-between items-center ${isHovered1 ? 'bg-gray-200' : ''}`}
                                onMouseEnter={() => setIsHovered1(true)}
                                onMouseLeave={() => setIsHovered1(false)}
                            >
                                <button className="pt-[24px] pb-[24px] ml-[10px]">
                                    <FontAwesomeIcon className="text-[#37352F] h-[16px] w-[12px]" icon={faFile}/>
                                </button>
                                <h1 className="content-center w-full ml-[10px]">I4 HS</h1>
                                <Popup
                                    trigger={
                                        <button className={`pt-[24px] pb-[24px] mr-[10px] relative ${isHovered1 ? 'visible' : 'invisible'}`}>
                                            <FontAwesomeIcon className="text-[#37352F]" icon={faX}/>
                                        </button>
                                    }
                                    modal
                                    nested
                                >
                                    {close && (
                                        <div className="w-[503px] h-[188px] flex flex-col content-center justify-center pl-[20px] pr-[20px]">
                                            <div className="font-[400] w-[708px]  pt-[4px] pb-[4px] leading-[24px] text-[16px] text-[#37352F]">
                                                Opravdu chcete smazat poznámku?
                                            </div>
                                            <div className="flex flex-row">
                                                <div>
                                                    <button className="bg-green-500 w-[39px] h-[31px] rounded-lg" onClick={() => { setDiv1Visible(false); close(); }}>
                                                        Ano
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className="bg-red-600 w-[39px] h-[31px] rounded-lg" onClick={close}>
                                                        Ne
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        )}
                        <div>
                            {div2Visible && (
                                <div className={`flex flex-row justify-between items-center ${isHovered2 ? 'bg-gray-200' : ''}`}
                                    onMouseEnter={() => setIsHovered2(true)}
                                    onMouseLeave={() => setIsHovered2(false)}
                                >
                                    <button className="pt-[24px] pb-[24px] ml-[10px]">
                                        <FontAwesomeIcon className="text-[#37352F] h-[16px] w-[12px]" icon={faFile}/>
                                    </button>
                                    <h1 className="content-center w-full ml-[10px]">I3 HS</h1>
                                    <Popup
                                        trigger={
                                            <button className={`pt-[24px] pb-[24px] mr-[10px] relative ${isHovered2 ? 'visible' : 'invisible'}`}>
                                                <FontAwesomeIcon className="text-[#37352F]" icon={faX}/>
                                            </button>
                                        }
                                    modal
                                    nested
                                >
                                {close && (
                                    <div className="w-[503px] h-[188px] flex flex-col content-center justify-center pl-[20px] pr-[20px]">
                                        <div className="font-[400] w-[708px]  pt-[4px] pb-[4px] leading-[24px] text-[16px] text-[#37352F]">
                                            Opravdu chcete smazat poznámku?
                                        </div>
                                        <div className="flex flex-row">
                                            <div>
                                                <button className="bg-green-500 w-[39px] h-[31px] rounded-lg" onClick={() => { setDiv2Visible(false); close(); }}>
                                                    Ano
                                                </button>
                                            </div>
                                            <div>
                                                <button className="bg-red-600 w-[39px] h-[31px] rounded-lg" onClick={close}>
                                                    Ne
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                </Popup>
                                </div>
                            )}
                            {div3Visible && (
                                <div className={`flex flex-row justify-between items-center ${isHovered3 ? 'bg-gray-200' : ''}`}
                                    onMouseEnter={() => setIsHovered3(true)}
                                    onMouseLeave={() => setIsHovered3(false)}
                                >
                                    <button className="pt-[24px] pb-[24px] ml-[10px]">
                                        <FontAwesomeIcon className="text-[#37352F]" icon={faFile}/>
                                    </button>
                                    <h1 className="content-center w-full ml-[10px]">I2 HS</h1>
                                    <Popup
                                    trigger={
                                    <button className={`pt-[24px] pb-[24px] mr-[10px] relative ${isHovered3 ? 'visible' : 'invisible'}`}>
                                        <FontAwesomeIcon className="text-[#37352F]" icon={faX}/>
                                    </button>
                                    }
                                    modal
                                    nested
                                >
                                    {close && (
                                        <div className="w-[503px] h-[188px] flex flex-col content-center justify-center pl-[20px] pr-[20px]">
                                            <div className="font-[400] w-[708px]  pt-[4px] pb-[4px] leading-[24px] text-[16px] text-[#37352F]">
                                                Opravdu chcete smazat poznámku?
                                            </div>
                                            <div className="flex flex-row">
                                                <div>
                                                    <button className="bg-green-500 w-[39px] h-[31px] rounded-lg" onClick={() => { setDiv3Visible(false); close(); }}>
                                                        Ano
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className="bg-red-600 w-[39px] h-[31px] rounded-lg" onClick={close}>
                                                        Ne
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                                </div>
                            )}
                        </div>
                        <div className={`flex flex-row justify-between items-center ${isHovered7 ? 'bg-gray-200' : ''}`}
                                onMouseEnter={() => setIsHovered7(true)}
                                onMouseLeave={() => setIsHovered7(false)}
                            >
                                <button className="pt-[24px] pb-[24px] ml-[10px]">
                                    <FontAwesomeIcon className="text-[#37352F] h-[16px] w-[12px]" icon={faFile}/>
                                </button>
                                <h1 className="content-center w-full ml-[10px]">Přidat poznámku</h1>
                                <Popup
                                    trigger={
                                        <button className={`pt-[24px] pb-[24px] mr-[10px] relative ${isHovered7 ? 'visible' : 'invisible'}`}>
                                            <FontAwesomeIcon className="text-[#37352F]" icon={faPlus}/>
                                        </button>
                                    }
                                    modal
                                    nested
                                >
                                    {close && (
                                        <div className="w-[503px] h-[288px] flex flex-col items-center justify-center mx-auto">
                                        <div className="font-normal w-[310px] pt-[4px] text-xl pb-[4px] text-[16px] text-[#37352F]">
                                            Chcete přidat novou poznámku?
                                        </div>
                                        <div>
                                            <input className="border border-gray-300 focus:border-gray-600 focus:outline-none px-4 py-2 rounded-md">
                                            </input>
                                        </div>
                                        <div className="flex flex-row mt-4 justify-between">
                                            <div>
                                                <button className="bg-green-500 w-[39px] h-[31px] rounded-lg">
                                                    Ano
                                                </button>
                                            </div>
                                            <div className="ml-6">
                                                <button className="bg-red-600 w-[39px] h-[31px] rounded-lg" onClick={close}>
                                                    Ne
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </Popup>
                            </div>
                    </div>
                </div>
            )}
            <div className="flex flex-col w-screen pt-[6px] pb-[12px]">
                <div className="border-b-[1px] flex flex-row  justify-between pt-[12px] pl-[36px] pr-[12px] pb-[36px] w-full h-[41px]">
                    <h1 className="font-[600] text-[14px] leading-[16,94px] text-[#191711]"><Markdown>{mainNadpis}</Markdown></h1>
                    <div className="justify-between space-x-[20px] mr-[20px]">
                        
                                <button className="">
                                    <FontAwesomeIcon className="text-[#37352F] pr-2 w-[16px] h-[16px]" icon={faFloppyDisk}/>
                                </button>

                        

                    
                        <button className=""><FontAwesomeIcon className="text-[#37352F] pr-2 w-[16px] h-[16px]"
                                                              icon={faPrint}/></button>
                        <button className=""><FontAwesomeIcon className="text-[#37352F] w-[16px] h-[16px]"
                                                              icon={faLink}/></button>
                    </div>
                </div>
                <div className="flex flex-col w-[708px] h-[911px] ml-[250px] mt-[50px]">
                    <h1 className="font-bold w-[708px] border-b-[1px] border-[#EDEDF0] pt-[12px] pb-[12px] text-4xl leading-[48,41px] text-[#000000]">I4 HS</h1>
                    <h1 className="font-semibold w-[708px] pt-[36px] pb-[8px] text-2xl leading-[36,31px] text-[#37352F]"><Markdown>{nadpisHlavni}</Markdown></h1>
                    <h1 className="font-normal w-[708px] pt-[4px] pb-[4px] text-base leading-[24px] text-[#37352F]"><Markdown>{odst1}</Markdown></h1>
                    <ul className="font-normal w-[708px] pt-[4px] pb-[4px] leading-[24px] text-base text-[#37352F]">
                        <li className="w-[708px] pt-[4px] pb-[4px] leading-[24px] text-base text-[#37352F]"><Markdown>{odst2}</Markdown></li>
                        <li className="w-[708px] pt-[4px] pb-[4px] leading-[24px] text-base text-[#37352F]"><Markdown>{odst3}</Markdown></li>
                        <li className="w-[708px] pt-[4px] pb-[4px] leading-[24px] text-base text-[#37352F]"><Markdown>{odst4}</Markdown></li>
                    </ul>
                    <h1 className="font-semibold w-[708px] pt-[36px] pb-[8px] text-2xl leading-[36,31px] text-[#37352F]"><Markdown>{nadpisDruhy}</Markdown></h1>
                    <div>
                        <h1 className="font-normal w-[708px] pt-[4px] pb-[4px] leading-[24px] text-base text-[#37352F]"><Markdown>{odst6}</Markdown></h1>
                    </div>
                    <p className="w-[708px] pt-[4px] pb-[4px] leading-[24px] text-base text-[#37352F]"><Markdown>{odst7}</Markdown></p>
                    <p className="w-[708px] pt-[4px] pb-[4px] leading-[24px] text-base text-[#37352F]"><Markdown>{odst8}</Markdown></p>
                    <p className="w-[708px] pt-[4px] pb-[4px] leading-[24px] text-base text-[#37352F]"><Markdown>{odst9}</Markdown></p>
                </div>
            </div>
        </div>
    );
}

export default Page;
