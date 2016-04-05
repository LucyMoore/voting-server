//We need to get a  plug in chai-immutable before any tests are run.
//make a test helper file
//import chai and chair immutable
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);
//Mocha will need to require this file before it starts running tests
