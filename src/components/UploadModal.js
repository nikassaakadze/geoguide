import React from 'react'
import { Modal,Form, Input, Select, message} from 'antd';
import '../styles/uploadModal.css'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import {db} from '../util/firebase'
import 'antd/dist/antd.css'

const { Option } = Select;

function UploadModal() {
  const {TextArea} = Input
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [name, setName] = React.useState("")
  const [info, setInfo] = React.useState("")
  const [pimg, setPimg] = React.useState("")
  const [img1, setImg1] = React.useState("")
  const [img2, setImg2] = React.useState("")
  const [img3, setImg3] = React.useState("")
  const [long, setLong] = React.useState("")
  const [lat, setLat] = React.useState("")
  const [plcValue, setPlcValue] = React.useState("")

  function handleChange(value) {
    setPlcValue(value)
  }

  const warning = () => {
    message.warning('გთხოვთ შეავსოთ ველები');
  };

  const success = () => {
    message.success('ინფორმაცია წარმატებით დაემატა');
  };

  const addInfo = (event) => {
    if(name !== "" && info !=="" & pimg != "" && img1 !="" && img2 !=="" && img3 !="" && long !=="" && lat !=""){
      db.collection('sides').doc(plcValue).collection("places").add({
        placeName: name,
        placeInfo: info,
        placeHero: pimg,
        gI1: img1,
        gI2: img2,
        gI3: img3,
        latit: lat,
        longit: long
      });
    setName("")
    setInfo("")
    setPimg("")
    setImg1("")
    setImg2("")
    setImg3("")
    setLong("")
    setLat("")
    setIsModalVisible(false)
    success()
    }else{
      warning()
    }
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <button className="uploadModalButton openModal" onClick={showModal}>
         <AddOutlinedIcon />
         <span>დამატება</span>
      </button>
      <Modal 
        title="ადგილების დამატება"  
        centered visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={[

      ]}
      >
      <div className="uploadModal__content">
      <Form name="placeUpload" initialValues={{ remember: true }}>
      <span className="modalFieldLabel">აირჩიეთ მხარე</span>
      <Select size="large" className="modalSideSelect"  style={{ width: 340 }} onChange={handleChange}>
      <Option value="8QtW79PzbwktKqQcNWI9">გურია</Option>
      <Option value="BlwHjxXjF9eNjoCvlhdn">სამცხე ჯავახეთი</Option>
      <Option value="LqIfnaf85jAOroBFPMsy">შიდა ქართლი</Option>
      <Option value="SYWOTaiErZKCWZmR7UVT">კახეთი</Option>
      <Option value="TFGUEpiioyZqelqM7PZU">აფხაზეთი</Option>
      <Option value="TphdDerMvX9qcxbn6bvT">რაჭა-ლეჩხუმ ქვემო სვანეთი</Option>
      <Option value="YrZ9VnxnKzEJWIqO5FhV">სამეგრელო</Option>
      <Option value="gkyitzQLOgrjtLc4DKa6">იმერეთი</Option>
      <Option value="iZFzoAhsNAwDEevkbgjH">აჭარა</Option>
      <Option value="wYI0IkP7vJ7254HnRrGF">ქვემო ქართლი</Option>
      <Option value="yhkII6pR8YsxJlDiWOao">მცხეთა მთიანეთი</Option>
    </Select>
    <br/>
      <Form.Item name="place" >
        <span className="modalFieldLabel">ადგილის სახელი</span>
        <Input value={name} onChange={(event) => setName(event.target.value)} className="modalFieldInput" />
      </Form.Item>
      <Form.Item name="mainimg" >
        <span className="modalFieldLabel">მთავარი სურათი</span>
        <Input value={pimg} onChange={(event) => setPimg(event.target.value)}  className="modalFieldInput" />
      </Form.Item>
      <Form.Item name="info" >
        <span className="modalFieldLabel">ინფორმაცია</span>
        <TextArea value={info} onChange={(event) => setInfo(event.target.value)} rows={4} />
      </Form.Item>
      <div className="fieldsRow">
      <Form.Item name="lat" >
        <span className="modalFieldLabel">lat</span>
        <Input type="number" value={lat} onChange={(event) => setLat(event.target.value)}  className="modalFieldInput fieldCol-lat" />
      </Form.Item>
      <Form.Item name="long" >
        <span className="modalFieldLabel">long</span>
        <Input type="number" value={long} onChange={(event) => setLong(event.target.value)} className="modalFieldInput fieldCol-long" />
      </Form.Item>
      </div>
      <Form.Item name="img1" >
        <span className="modalFieldLabel">სურათი 1</span>
        <Input  value={img1} onChange={(event) => setImg1(event.target.value)} className="modalFieldInput" />
      </Form.Item>
      <Form.Item name="img2" >
        <span className="modalFieldLabel">სურათი 2</span>
        <Input value={img2} onChange={(event) => setImg2(event.target.value)} className="modalFieldInput" />
      </Form.Item>
      <Form.Item name="img3" >
        <span className="modalFieldLabel">სურათი 3</span>
        <Input value={img3} onChange={(event) => setImg3(event.target.value)} className="modalFieldInput" />
      </Form.Item>
      <Form.Item >
        <button onClick={addInfo} type="primary" htmlType="submit" className="uploadModalButton">
         <AddOutlinedIcon />
         <span>დამატება</span>
        </button>
      </Form.Item>
    </Form>
      </div>
      </Modal>
    </div>
  )
}

export default UploadModal
