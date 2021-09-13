import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
} from 'reactstrap';
import validationSchema, { defaultTerrains } from '../../helpers/schema';
import randomNumber from '../../helpers/randomNumber';

const ModalForm = ({ setResponse, setIsOpen }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      rotation_period: '',
      orbital_period: '',
      diameter: '',
      climate: '',
      gravity: '',
      surface_water: '',
      terrain: defaultTerrains[0],
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const isSuccess = randomNumber();

      setResponse({
        message: isSuccess ? 'Data saved.' : 'Data not saved.',
        type: isSuccess ? 'success' : 'danger',
      });

      resetForm();
      setIsOpen(false);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          invalid={!!(formik.touched.name && formik.errors.name)}
        />
        <FormFeedback>{formik.errors.name}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="rotation_period">Rotation Period</Label>
        <Input
          type="number"
          name="rotation_period"
          id="rotation_period"
          placeholder="Rotation Period"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.rotation_period}
          invalid={!!(formik.touched.rotation_period && formik.errors.rotation_period)}
        />
        <FormFeedback>{formik.errors.rotation_period}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="orbital_period">Orbital Period</Label>
        <Input
          type="number"
          name="orbital_period"
          id="orbital_period"
          placeholder="Orbital Period"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.orbital_period}
          invalid={!!(formik.touched.orbital_period && formik.errors.orbital_period)}
        />
        <FormFeedback>{formik.errors.orbital_period}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="diameter">Diameter</Label>
        <Input
          type="number"
          name="diameter"
          id="diameter"
          placeholder="Diameter"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.diameter}
          invalid={!!(formik.touched.diameter && formik.errors.diameter)}
        />
        <FormFeedback>{formik.errors.diameter}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="climate">Climate</Label>
        <Input
          type="text"
          name="climate"
          id="climate"
          placeholder="Climate"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.climate}
          invalid={!!(formik.touched.climate && formik.errors.climate)}
        />
        <FormFeedback>{formik.errors.climate}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="gravity">Gravity</Label>
        <Input
          type="text"
          name="gravity"
          id="gravity"
          placeholder="Gravity"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.gravity}
          invalid={!!(formik.touched.gravity && formik.errors.gravity)}
        />
        <FormFeedback>{formik.errors.gravity}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="surface_water">Surface Water</Label>
        <Input
          type="number"
          name="surface_water"
          id="surface_water"
          placeholder="Surface Water"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surface_water}
          invalid={!!(formik.touched.surface_water && formik.errors.surface_water)}
        />
        <FormFeedback>{formik.errors.surface_water}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="terrain">Terrain</Label>
        <Input
          type="select"
          name="terrain"
          id="terrain"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.terrain || defaultTerrains[0]}
          invalid={!!(formik.touched.terrain && formik.errors.terrain)}
        >
          {defaultTerrains.map((terrain, index) => (
            <option key={index} value={terrain}>{terrain}</option>
          ))}
        </Input>
        <FormFeedback>{formik.errors.terrain}</FormFeedback>
      </FormGroup>
      <Button type="submit" color="primary">Submit</Button>
    </Form>
  );
};

ModalForm.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  setResponse: PropTypes.func.isRequired,
};

export default ModalForm;
