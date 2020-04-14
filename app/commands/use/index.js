/**
 * The "use" command
 *
 * @author Nahid Ferdous Mohit.
 * @since  2.0.0
 */

/*
 * External dependencies
 */
import logo from 'asciiart-logo';

/*
 * Internal dependencies
 */
import * as config from '../../../package.json';
import { verifyBoilerplate } from './utils';

const Use = async ( boilerplate ) => {
	console.log( logo( config ).render() );

	/*
	 * Verify the boilerplate
	 */
	const isBoilerplateVerified = await verifyBoilerplate( boilerplate );
	if ( isBoilerplateVerified ) {
		console.log( `${ boilerplate } found!` );
	} else {
		console.log( `We couldn't find ${ boilerplate }!` );
	}

	const isBoilerplateVerifiedSummary = await verifyBoilerplate(
		boilerplate,
		'summary'
	);
	console.log( isBoilerplateVerifiedSummary );
};

export default Use;
