import React, { useState } from "react"
import styled from "styled-components"
import Modal from "../components/Modal"
import useImageGallery from "../hooks/useImageGallery"

export default function ImageGallery({ setLoading }) {
  const [thumbs, placeholders] = useImageGallery(setLoading)
  const [selected, setSelected] = useState(null)

  return (
    <S.Wrapper>
      <S.Gallery>
        {thumbs.map((thumb, i) => (
          <S.ImageBox
            key={`${thumb.timestamp}${i}`}
            thumbnail={thumb.data}
            onClick={() => setSelected(thumb.timestamp)}
          />
        ))}
        {placeholders.map(() => (
          <S.Placeholder />
        ))}
      </S.Gallery>
      <Modal selected={selected} setSelected={setSelected} />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    margin-top: 60px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Gallery: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
  `,
  ImageBox: styled.div`
    height: 120px;
    width: 120px;
    display: flex;
    box-sizing: border-box;
    margin: 5px;
    border: 10px solid #FFFFFF;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0,0,0,.1);
    overflow: hidden;
    background-image: url("${p => p.thumbnail}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `,
  Image: styled.div`
    flex: 1;
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    background-image: url("${p => p.thumbnail}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `,
  Placeholder: styled.div`
    width: 120px;
    height: 120px;
    border: 1px dotted #cccccc;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    background: #ffffff;
  `,
}
