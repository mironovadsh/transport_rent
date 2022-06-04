import {React, useContext,useState, useEffect} from 'react'
import {Modal, Button, Form, Dropdown, FormControl, Col, Row} from "react-bootstrap"
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import {Context} from "../index";
import {createTS, fetchBrands, fetchTS, fetchTypes} from "../http/tsAPI";
import {observer} from "mobx-react-lite";

const CreateTS = observer(({show, onHide}) => {
    const {TS} = useContext(Context) 
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    useEffect(() => {
      fetchTypes().then(data => TS.setTypes(data))
      fetchBrands().then(data => TS.setBrands(data))

  }, [])
  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
} 
const removeInfo = (number) => {
  setInfo(info.filter(i => i.number !== number))
}
const changeInfo = (key, value, number) => {
  setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
}

const selectFile = e => {
  setFile(e.target.files[0])
}
const addTS = () => {
  const formData = new FormData()
  console.log(file);
  formData.append('name', name)
  formData.append('price', price)
  formData.append('img', file)
  formData.append('brandId', TS.selectedBrand.id)
  formData.append('typeId', TS.selectedType.id)
  formData.append('info', JSON.stringify(info))
  createTS(formData).then(data => onHide())

}
    return (
        <Modal
        show={show}
        onHide={onHide}
        centered

      size="lg"


    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить ТС
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
          <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{TS.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {TS.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => TS.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{TS.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {TS.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => TS.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
              <FormControl
                value={name}
                onChange={e => setName(e.target.value)}
                className="mt-3"
                placeholder="Введите название тс"
              />
              <FormControl
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                className="mt-3"
                placeholder="Введите стоимость тс"
                type="number"
              />
              <FormControl
                className="mt-3"
                type="file"
                onChange={selectFile}
              />
              <hr/>
              <Button variant={"outline-dark"} onClick={addInfo}>
                  Добавить новое свойтсво</Button>
                  {
                      info.map(i => 
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                value={i.tittle}
                                onChange={(e) => changeInfo('tittle', e.target.value, i.number)}
                                placeholder="Введите название свойства"/>

                            </Col>
                            <Col md={4}>
                                <Form.Control
                                value={i.description}
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                placeholder="Введите описание свойства"/>
                                
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(i.number)} variant={"outline-danger"}>Удалить</Button>
                            </Col>
                        </Row>)
                  }

            
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addTS}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
});

export default CreateTS;