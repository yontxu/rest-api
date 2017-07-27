<?php
	/**
	 * AppBundle\Controller\CarsController
	 *
	 * User: yzubizarreta
	 * Date: 27/7/17
	 */

	namespace AppBundle\Controller;


	use FOS\RestBundle\Controller\FOSRestController;
	use FOS\RestBundle\Controller\Annotations\Get;
	use FOS\RestBundle\Controller\Annotations\Post;
	use FOS\RestBundle\Controller\Annotations\Patch;
	use Symfony\Component\HttpFoundation\Request;
	use Symfony\Component\HttpFoundation\Response;
	use FOS\RestBundle\View\View;
	use AppBundle\Entity\Car;

	class CarsController extends FOSRestController {

		/**
		 * GET Route annotation.
		 * @Get("/cars")
		 */
		public function indexAction() {
			$cars = $this->getDoctrine()->getRepository( 'AppBundle:Car' )->findAll();
			if ( $cars === null || empty($cars)) {
				return new View( "Not found.", Response::HTTP_NOT_FOUND );
			}
			return $cars;
		}

		/**
		 * GET Route annotation.
		 * @Get("/cars/{id}")
		 */
		public function showAction( $id ) {
			$car = $this->getDoctrine()->getRepository( 'AppBundle:Car' )->find( $id );
			if ( $car === null) {
				return new View( "Not found.", Response::HTTP_NOT_FOUND );
			}
			return $car;
		}

		/**
		 * @Post("/cars")
		 */
		public function postAction( Request $request ) {
			$car = new Car();

			$model = $request->get( 'model' );
			$wheels = $request->get( 'wheels' );
			$color  = $request->get( 'color' );
			$price = $request->get( 'price' );

			//todo: improve request data type validation
			if ( empty($model) || empty($wheels) || empty($color) || empty($price) ) {
				return new View("Unable to process the Car entity", Response::HTTP_NOT_ACCEPTABLE);
			}

			$car->setModel($model);
			$car->setWheels($wheels);
			$car->setColor($color);
			$car->setPrice($price);

			$em = $this->getDoctrine()->getManager();
			$em->persist($car);
			$em->flush();

			return $car;
		}

		/**
		 * @Patch("/cars/{id}")
		 */
		public function updateAction( $id, Request $request ) {
			$car = $this->getDoctrine()->getRepository( 'AppBundle:Car' )->find( $id );
			if ( $car === null) {
				return new View( "Not found.", Response::HTTP_NOT_FOUND );
			}

			$model = $request->get( 'model' );
			$wheels = $request->get( 'wheels' );
			$color  = $request->get( 'color' );
			$price = $request->get( 'price' );

			//todo: improve request data type validation
			if ( empty($model) || empty($wheels) || empty($color) || empty($price) ) {
				return new View("Unable to process the Car entity", Response::HTTP_NOT_ACCEPTABLE);
			}

			$car->setModel($model);
			$car->setWheels($wheels);
			$car->setColor($color);
			$car->setPrice($price);

			$em = $this->getDoctrine()->getManager();
			$em->persist($car);
			$em->flush();

			return $car;
		}

	}