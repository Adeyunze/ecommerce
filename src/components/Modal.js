import React from 'react';
import { useSearchContext } from '../context/search_context';
import ModalDesign from './ModalDesign';
import NoProd from './NoProd';

const Modal = () => {
  const { search, modal, searchList } = useSearchContext()
  if(modal && searchList.length === 0){
    return (
      <NoProd/>
    )
  }

  if(search.length >= 2 && modal){
    return (
      <ModalDesign/>
    )
  }

}

export default Modal